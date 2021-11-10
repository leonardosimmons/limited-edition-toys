import React from 'react';
import { Key } from 'utils/keys';
import { CarouselArrow as CarouselArrowType } from '../../types';

import { CarouselArrowBase } from '../../styles/CarouselFeatures';

import Typography from '@mui/material/Typography';

type Props = {
  direction: string;
  clicked: () => void;
  index?: number;
  bgColor?: string;
};

const initArrow: CarouselArrowType = {
  container: {
    backgroundColor: '',
  },
  arrow: {
    transform: '',
  },
};

const CarouselArrow: React.FunctionComponent<Props> = ({
  direction,
  clicked,
  bgColor,
  index,
}): JSX.Element => {
  const [arrow, setArrow] = React.useState<CarouselArrowType>(initArrow);

  /* --------------------  STYLES  -------------------- */
  React.useEffect(() => {
    const arrowStyles = {
      container: {
        backgroundColor: `${bgColor || 'transparent'}`,
      },
      arrow: {
        transform: `translateX(${direction === Key.LEFT ? '-2' : '2'}px)`,
      },
    };
    setArrow(arrowStyles);

    return () => {
      setArrow(initArrow);
    };
  }, []);

  /* --------------------  RENDER  -------------------- */
  return (
    <CarouselArrowBase
      id={direction === Key.RIGHT ? 'right-arrow' : 'left-arrow'}
      style={arrow.container}
      onClick={clicked}>
      {direction === Key.RIGHT ? (
        <Typography
          component="span"
          sx={{ marginLeft: '3.75rem' }}
          style={arrow.arrow}>
          &#62;
        </Typography>
      ) : (
        <Typography
          component="span"
          sx={{ marginLeft: '3.75rem', transform: 'rotate(180deg)' }}
          style={arrow.arrow}>
          &#60;
        </Typography>
      )}
    </CarouselArrowBase>
  );
};

export default CarouselArrow;
