import { useLayoutEffect } from 'react';

const useResizeObserver = <T extends HTMLElement>(element: React.RefObject<T>, onResize: () => void) => {
  useLayoutEffect(() => {
    const prevWidth = element.current.clientWidth; //.getBoundingClientRect().width;
    const observer = new ResizeObserver(([entry]) => {
      // if (prevWidth !== entry.contentBoxSize[0].inlineSize) {
      if (prevWidth !== entry.contentRect.width) {
        onResize();
      }
    });
    const currentRef = element.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  });
};

export default useResizeObserver;
