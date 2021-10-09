import { createReducer } from '@reduxjs/toolkit';
import { setViewportType } from '..';

type UiStatus = {
  viewport: 'mobile' | 'desktop' | undefined;
};

const initialState: UiStatus = {
  viewport: undefined,
};

export const uiStatusReducer = createReducer(initialState, (builder) =>
  builder.addCase(setViewportType, (state, action) => {
    state.viewport = action.payload;
  }),
);
