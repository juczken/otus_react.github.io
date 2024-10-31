import React, { useEffect, useRef, useState } from "react"
import useIntersectionObserve from "../../hooks/useIntersectionObserver"


type ComponentFetchListProps<T,P> = React.HTMLAttributes<HTMLDivElement> & {
    items: T[];
    itemElement: React.ComponentType<P>;
    fetchItems: () => void;
    mapItem: (item: T) => P
}

type InfinityListVisibleItemType<T> = {
    index: number;
    value: T;
};

const ComponentFetchList = <T extends { id: string },P>({ items, itemElement: ItemElement, fetchItems, mapItem }: ComponentFetchListProps<T,P>) => {
    const [visibleItems, setVisibleItems] = useState<InfinityListVisibleItemType<T>[]>(() =>
        items.map((value, index) => ({ value, index }))
    );

    const onIntersect = () => {
        fetchItems();
    }

    useEffect(() => {
        setVisibleItems([
            ...visibleItems,
            ...(items.map((value, index) => ({ value, index: index })).filter((value) => !visibleItems.some((item) => item.index === value.index)))
        ])
    }, [items])

    const targetRef = useRef<HTMLDivElement>(null);
    useIntersectionObserve(targetRef, onIntersect, { threshold: 0.5 });

    console.log(visibleItems)
    console.log(items)

    return (
        <>{console.log('render list')}
            {visibleItems.map((item) => {
                return (
                    <div ref={item.index === visibleItems.length - 2 ? targetRef : null} key={item.value.id}>
                        <ItemElement {...(mapItem(item.value))} />
                    </div>
                )
            })}
        </>
    )
};

export default ComponentFetchList