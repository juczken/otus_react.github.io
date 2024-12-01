import React, { useLayoutEffect, useState, useRef } from 'react';

type CropTextProps = {
  text: string;
  crop: boolean;
};

const INIT_TEXT = 'A';

const CropText = ({ text, crop }: CropTextProps) => {
  const lineHeight = useRef<number>(null);
  const element = useRef<HTMLDivElement>();
  const ind = useRef(0);
  const [calculated, setCalculated] = useState(false);
  const [croppedText, setCroppedText] = useState(INIT_TEXT);
  useLayoutEffect(() => {
    lineHeight.current = lineHeight.current ?? element.current.getBoundingClientRect()?.height;
  }, [text, crop]);

  useLayoutEffect(() => {
    if (calculated) {
      return;
    }
    const postfix = '...';
    const words = text.split(' ');
    if (ind.current >= words.length - 1) {
      setCalculated(true);
      setCroppedText(text);
    }
    if (lineHeight.current < element.current.getBoundingClientRect().height) {
      setCalculated(true);
      ind.current--;
      setCroppedText([words.slice(0, ind.current + 1).join(' '), postfix].join(''));
      return;
    }
    ind.current++;
    setCroppedText([words.slice(0, ind.current + 1).join(' '), ind.current < words.length - 1 ? postfix : ''].join(''));
  }, [text, croppedText, calculated]);

  useLayoutEffect(() => {
    const prevWidth = element.current.clientWidth; //.getBoundingClientRect().width;
    const observer = new ResizeObserver(([entry]) => {
      // if (prevWidth !== entry.contentBoxSize[0].inlineSize) {
      if (prevWidth !== entry.contentRect.width) {
        setCroppedText(INIT_TEXT);
        setCalculated(false);
        ind.current = 0;
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

  return <div ref={element}>{crop ? croppedText : text}</div>;
};

export default CropText;
