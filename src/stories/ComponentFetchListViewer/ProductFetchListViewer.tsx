import { FC, useState } from "react";
import React from "react";
import { createRandomProduct, getRandomDate } from "../../shared/lib/fakeGenerators/fakeGenerators";
import ProductItem from "../../entities/Product/ui/ProductItem/ProductItem";
import ComponentFetchList from "../../shared/ui/ComponentFetchList/ComponentFetchList";

const ProductFetchListViewer: FC = () => {
    const [items, setItems] = useState(Array.from({ length: 20 }).map(() => (createRandomProduct(getRandomDate(new Date('2022-01-01'), new Date('2022-12-31'))))))

    const doFetch = () => {
        setItems([
            ...items,
        ...(Array.from({ length: 20 }).map(() => (createRandomProduct(getRandomDate(new Date('2022-01-01'), new Date('2022-12-31'))))))
        ])
    }

    const mapItem = (item: Product) => {
        return {
            ...item,
            categoryName: item.category.name
        }
    }

    return (
        <>
            <ComponentFetchList items={items} itemElement={ProductItem} fetchItems={doFetch} mapItem={mapItem}/>
        </>
    )
}

export default ProductFetchListViewer