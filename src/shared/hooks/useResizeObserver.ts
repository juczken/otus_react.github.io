import { useLayoutEffect } from 'react';

const useResizeObserver = <T extends HTMLElement>(
  element: React.RefObject<T>,
  observeHeight: boolean,
  observeWidth: boolean,
  onResize: () => void
) => {
  useLayoutEffect(() => {
    const prevWidth = element.current.clientWidth; //.getBoundingClientRect().width;
    const prevHeight = element.current.clientHeight; //.getBoundingClientRect().width;
    const observer = new ResizeObserver(([entry]) => {
      // if (prevWidth !== entry.contentBoxSize[0].inlineSize) {
      if (
        (observeWidth && prevWidth !== entry.contentRect.width) ||
        (observeHeight && prevHeight !== entry.contentRect.height)
      ) {
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
