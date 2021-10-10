import { createReducer } from '@reduxjs/toolkit';
import { setStatus, setViewportType } from '..';

type UiStatus = {
  current: 'completed' | 'error' | 'loading' | 'ready';
  viewport: 'mobile' | 'desktop' | undefined;
};

const initialState: UiStatus = {
  current: 'ready',
  viewport: undefined,
};

export const uiStatusReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setStatus, (state, action) => {
      state.current = action.payload;
    })
    .addCase(setViewportType, (state, action) => {
      state.viewport = action.payload;
    }),
);
