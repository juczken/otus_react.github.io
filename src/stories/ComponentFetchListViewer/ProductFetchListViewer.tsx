import React, { FC, useState } from 'react';

import { createRandomProduct, getRandomDate } from '../../shared/lib/fakeGenerators/fakeGenerators';
import ProductItem from '../../entities/Product/ui/ProductItem/ProductItem';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';

const ProductFetchListViewer: FC = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }).map(() =>
      createRandomProduct(getRandomDate(new Date('2022-01-01'), new Date('2022-12-31')))
    )
  );

  const fetchItems = () => {
    setItems([
      ...items,
      ...Array.from({ length: 20 }).map(() =>
        createRandomProduct(getRandomDate(new Date('2022-01-01'), new Date('2022-12-31')))
      ),
    ]);
  };

  return (
    <>
      <ComponentFetchList
        items={items}
        doFetch={fetchItems}
        render={(item) => (
          <div key={item.id}>
            <ProductItem name={item.name} desc={item.desc} price={item.price} photo={item.photo} />
          </div>
        )}
      />
      {/* render={(item, index, count, ref) => <div ref={index === count - 2 ? ref : null} key={item.id} style={{ margin: '50px' }}><ProductItem name={item.name} desc={item.desc} price={item.price} photo={item.photo} /></div>} /> */}
    </>
  );
};

export default ProductFetchListViewer;
