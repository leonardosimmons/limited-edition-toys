import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getStatus = (state: AppState) => state.ui.status.current;
const getViewport = (state: AppState) => state.ui.status.viewport;

export const uiStatusSelector = createSelector(
  [getStatus, getViewport],
  (status, viewport) => ({
    current: status,
    viewport,
  }),
);
