import { createReducer } from '@reduxjs/toolkit';
import { resetCurrentPanel, setCurrentPanel } from './actions';

type DashboardState = {
  panel: {
    current: number;
  }
}

const initialState: DashboardState = {
  panel: {
    current: 0,
  }
}

export const dashboardReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setCurrentPanel, (state, action) => {
      state.panel.current = action.payload;
    })
    .addCase(resetCurrentPanel, (state) => {
      state.panel.current = 0;
    })
);