import { createReducer } from '@reduxjs/toolkit';
import { UiStatus } from 'modules/ui/types';
import { Viewport } from 'utils/types';
import { setStatus, setViewportType } from '..';

type UiState = {
  current: UiStatus;
  viewport: Viewport;
};

const initialState: UiState = {
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
