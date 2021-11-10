

import { NEXT, PREV, FIRST_SLIDE, LAST_SLIDE, SET_WIDTH, SET_SLIDE_COUNT, SET_DOT_COUNT, RESET_POSITION, CarouselActions } from './action-types';

export const next = (): CarouselActions => ({ type: NEXT });
export const prev = (): CarouselActions => ({ type: PREV });
export const firstSlide = (): CarouselActions => ({ type: FIRST_SLIDE });
export const lastSlide = (): CarouselActions => ({ type: LAST_SLIDE });
export const resetPositon = (): CarouselActions => ({ type: RESET_POSITION });

export const setWidth = (width: number): CarouselActions => 
(
  {
    type: SET_WIDTH,
    payload: {
      width: width
    }
  }
);

export const setSlideCount = (count: number): CarouselActions => 
(
  {
    type: SET_SLIDE_COUNT,
    payload: {
      count: count
    }
  }
);

export const setDotCount = (count: number[]): CarouselActions =>
(
  {
    type: SET_DOT_COUNT,
    payload: {
      count: count
    }
  }
);
