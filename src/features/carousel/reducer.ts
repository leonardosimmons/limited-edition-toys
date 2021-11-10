import { CarouselContext } from './types';
import {
  NEXT,
  PREV,
  FIRST_SLIDE,
  LAST_SLIDE,
  SET_WIDTH,
  SET_SLIDE_COUNT,
  SET_DOT_COUNT,
  CarouselActions,
  RESET_POSITION,
} from './action-types';

export default function carouselReducer(
  state: CarouselContext,
  action: CarouselActions,
): CarouselContext {
  switch (action.type) {
    case NEXT:
      const nextIndex = state.activeIndex;
      return {
        ...state,
        activeIndex: nextIndex + 1,
        translate: (nextIndex + 1) * state.width,
      };
    case PREV:
      const prevIndex = state.activeIndex;
      return {
        ...state,
        activeIndex: prevIndex - 1,
        translate: (prevIndex - 1) * state.width,
      };
    case FIRST_SLIDE:
      const slideCount = state.slideCount;
      return {
        ...state,
        activeIndex: slideCount - 1,
        translate: (slideCount - 1) * state.width,
      };
    case LAST_SLIDE:
      return {
        ...state,
        activeIndex: 0,
        translate: 0,
      };
    case RESET_POSITION:
      return {
        ...state,
        translate: 0,
        activeIndex: 0,
      };
    case SET_WIDTH:
      const width = action.payload.width;
      return {
        ...state,
        width: width,
      };
    case SET_SLIDE_COUNT:
      const slides = action.payload.count;
      return {
        ...state,
        slideCount: slides,
      };
    case SET_DOT_COUNT:
      const dots = action.payload.count;
      return {
        ...state,
        dotCount: dots,
      };
    default:
      return state;
  }
}
