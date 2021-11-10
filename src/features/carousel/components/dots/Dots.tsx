import React from 'react';
import { CarouselDot } from '../../types';

import { CarouselDots as CarouselDotsWrapper } from '../../styles/CarouselFeatures';
import { Color } from 'utils/keys';

const CarouselDot: React.FunctionComponent<CarouselDot> = ({
  active,
  index,
}): JSX.Element => {
  return (
    <span
      style={{
        background: `${active ? Color.PRIMARY : Color.NAVBAR_BACKGROUND}`,
        border: `1px solid ${active ? Color.NAVBAR_BACKGROUND : 'transparent'}`,
      }}
    />
  );
};

type Props = {
  slides: any[];
  activeIndex: number;
};

const CarouselDots: React.FunctionComponent<Props> = ({
  slides,
  activeIndex,
}): JSX.Element => {
  return (
    <CarouselDotsWrapper>
      {slides.map((slide, index) => (
        <CarouselDot
          key={slide}
          index={activeIndex}
          active={activeIndex === index}
        />
      ))}
    </CarouselDotsWrapper>
  );
};

export default CarouselDots;
