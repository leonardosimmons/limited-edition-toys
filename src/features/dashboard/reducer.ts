import { createReducer } from '@reduxjs/toolkit';
import { resetCurrentPanelSelection, setCurrentPanelSelection } from './actions';

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
    .addCase(setCurrentPanelSelection, (state, action) => {
      state.panel.current = action.payload;
    })
    .addCase(resetCurrentPanelSelection, (state) => {
      state.panel.current = 0;
    })
);