import React, { useRef } from 'react';
import useIntersectionObserve from '../../hooks/useIntersectionObserver';

type ComponentFetchListProps<T, P extends T> = React.HTMLAttributes<HTMLDivElement> & {
  items: (T & { id: string })[];
  itemElement: React.ComponentType<P>;
  elementProps?: Omit<P, keyof T>;
  // fetchItems: (items: (T & { id: string })[]) => void;
  fetchItems: () => void;
};

const ComponentFetchList = <T extends { id: string }, P extends T>({
  items,
  itemElement: ItemElement,
  elementProps,
  fetchItems,
}: ComponentFetchListProps<T, P>) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useIntersectionObserve(targetRef, fetchItems, { threshold: 0.5 });

  return (
    <>
      {items.map((item, index) => {
        return (
          <div ref={index === items.length - 2 ? targetRef : null} key={item.id}>
            <ItemElement {...({ ...elementProps, ...(item as T) } as P)} />
          </div>
        );
      })}
    </>
  );
};

export default ComponentFetchList;
