export type CarouselArrow = {
  container: {
    backgroundColor: string;
  };
  arrow: {
    transform: string;
  };
};

export type CarouselContext = {
  width: number;
  height: number;
  translate: number;
  transition: number;
  activeIndex: number;
  slideCount: number;
  dotCount: number[];
};

export type CarouselContentContext = {
  width: string;
  height: string;
  transform: string;
  transition: string;
  readonly display: string;
};

export type CarouselDot = {
  active: boolean;
  index: number;
};
