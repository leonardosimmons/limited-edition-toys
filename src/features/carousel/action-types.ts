//** ---------------------  TYPES  --------------------- **//
export const NEXT = 'next_carousel_slide';
export const PREV = 'prev_carousel_slide';
export const FIRST_SLIDE = 'first_carousel_slide';
export const LAST_SLIDE = 'last_carousel_slide';
export const RESET_POSITION = 'reset_position';
export const SET_WIDTH = 'set_carousel_width';
export const SET_SLIDE_COUNT = 'set_carousel_slides';
export const SET_DOT_COUNT = 'set_carousel_dots';


//** --------------------  ACTIONS  -------------------- **//

export type NextCarouselSlideAction = {
  type: typeof NEXT;
};

export type PrevCarouselSlideAction = {
  type: typeof PREV;
};

export type FirstCarouselSlideAction = {
  type: typeof FIRST_SLIDE;
};

export type LastCarouselSlideAction = {
  type: typeof LAST_SLIDE;
};

export type ResetCarouselPosition = {
  type: typeof RESET_POSITION;
};

export type SetCarouselWidthAction = {
  type: typeof SET_WIDTH;
  payload: {
    width: number;
  };
};

export type SetCarouselSlideCountAction = {
  type: typeof SET_SLIDE_COUNT;
  payload: {
    count: number;
  };
};

export type SetCarouselDotCountAction = {
  type: typeof SET_DOT_COUNT;
  payload: {
    count: number[];
  };
};

export type CarouselActions = NextCarouselSlideAction | PrevCarouselSlideAction | FirstCarouselSlideAction | LastCarouselSlideAction | ResetCarouselPosition | SetCarouselWidthAction | SetCarouselSlideCountAction | SetCarouselDotCountAction;