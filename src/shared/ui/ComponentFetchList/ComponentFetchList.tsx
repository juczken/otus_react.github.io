import React, { useRef } from 'react';
import useIntersectionObserve from '../../hooks/useIntersectionObserver';

type ComponentFetchListProps<T> = {
  items: T[];
  doFetch: () => void;
  render: (item: T) => React.ReactNode;
  // render: (item: T, index: number, count: number, ref: React.RefObject<HTMLDivElement>) => React.ReactNode,
};

const ComponentFetchList = <T,>({ items, render, doFetch }: ComponentFetchListProps<T>) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useIntersectionObserve(targetRef, doFetch, { threshold: 0.5 });

  return (
    <>
      {items.map((item, index) =>
        index === items.length - 2
          ? React.cloneElement(render(item) as React.ReactElement, { ref: targetRef })
          : render(item)
      )}
    </>
  );
  // return <>{items.map((item, index) => render(item, index, items.length, targetRef))}</>
  // return <>{items.map(render)}</>
};

export default ComponentFetchList;
