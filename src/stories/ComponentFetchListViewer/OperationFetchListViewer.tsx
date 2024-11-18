import React, { FC, useState } from 'react';

import OperationItem from '../../entities/Operation/ui/OperationItem/OperationItem';
import { createRandomOperation, getRandomDate } from '../../shared/lib/fakeGenerators/fakeGenerators';
import ComponentFetchList from '../../shared/ui/ComponentFetchList/ComponentFetchList';

const OperationFetchListViewer: FC = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 })
      .map(() => createRandomOperation(getRandomDate(new Date('2022-01-01'), new Date('2022-12-31'))))
      .map((value) => ({
        id: value.id,
        name: value.name,
        categoryName: value.category.name,
        amount: value.amount,
        desc: value.desc,
      }))
  );

  const fetchItems = () => {
    setItems([
      ...items,
      ...Array.from({ length: 20 })
        .map(() => createRandomOperation(getRandomDate(new Date('2022-01-01'), new Date('2022-12-31'))))
        .map((value) => ({
          id: value.id,
          name: value.name,
          categoryName: value.category.name,
          amount: value.amount,
          desc: value.desc,
        })),
    ]);
  };

  return (
    <>
      <ComponentFetchList
        items={items}
        doFetch={fetchItems}
        render={(item) => (
          <div key={item.id}>
            <OperationItem name={item.name} desc={item.desc} amount={item.amount} categoryName={item.categoryName} />
          </div>
        )}
      />
    </>
  );
};

export default OperationFetchListViewer;
