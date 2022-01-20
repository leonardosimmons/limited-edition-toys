import { AppState } from '../../redux';
import { createSelector } from 'reselect';

const getId = (state: AppState) => state.dashboard.id;
const getInformation = (state: AppState) => state.dashboard.information;
const getPanel = (state: AppState) => state.dashboard.panel;

export const dashboardSelector = createSelector(
  [ getId, getInformation, getPanel ],
  (id, info, panel) => ({
    id,
    information: info,
    panel
  })
);
