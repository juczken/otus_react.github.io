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

  const doFetch = () => {
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
      <ComponentFetchList items={items} itemElement={OperationItem} fetchItems={doFetch} />
    </>
  );
};

export default OperationFetchListViewer;
