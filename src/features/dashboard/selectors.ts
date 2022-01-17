import { AppState } from '../../redux';
import { createSelector } from 'reselect';

const getInformation = (state: AppState) => state.dashboard.information;
const getPanel = (state: AppState) => state.dashboard.panel;

export const dashboardSelector = createSelector(
  [ getInformation, getPanel ],
  (info, panel) => ({
    information: info,
    panel
  })
);
