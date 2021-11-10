import React from 'react';
import { CarouselContentContext } from './types';

type Props = {
  width: number;
  translate: number;
  transition: number;
  slideCount: (count: number) => void;
  dotCount: (dots: number) => void;
  height?: number;
};

export enum Base {
  display = 'flex',
}

const initialContentContext: CarouselContentContext = {
  transform: '',
  transition: '',
  width: '',
  height: '0',
  display: Base.display,
};

const CarouselContent: React.FunctionComponent<Props> = ({
  width,
  translate,
  transition,
  slideCount,
  dotCount,
  height,
  children,
}): JSX.Element => {
  /* -----------------  SLIDE COUNT  ----------------- */
  const getSlideCount = React.useCallback((): void => {
    slideCount(React.Children.count(children));
  }, [slideCount, children]);

  React.useEffect(() => {
    getSlideCount();

    return () => {
      slideCount(0);
    };
  }, [getSlideCount, slideCount]);

  /* -------------------  DOT COUNT  ------------------ */
  React.useEffect(() => {
    dotCount(React.Children.count(children));
  }, [dotCount, children]);

  /* --------------------  CONTEXT  -------------------- */
  const [context, setContext] = React.useState<CarouselContentContext>(
    initialContentContext,
  );

  React.useEffect(() => {
    const status: CarouselContentContext = {
      transform: `translateX(-${translate}px)`,
      transition: `transform ease-out ${transition}s`,
      height: `${height ? height + 'rem' : '100%'}`,
      width: `${width * React.Children.count(children)}px`,
      display: context.display,
    };
    setContext(status);

    return () => {
      setContext(initialContentContext);
    };
  }, [width, height, translate, transition, context.display, children]);

  /* --------------------  RENDER  -------------------- */
  return <div style={context}>{children}</div>;
};

export default CarouselContent;
