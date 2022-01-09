import { AppState } from '../../redux';
import { createSelector } from 'reselect';

const getPanel = (state: AppState) => state.dashboard.panel;

export const dashboardSelector = createSelector(
  [ getPanel ],
  (panel) => ({
    panel
  })
);
