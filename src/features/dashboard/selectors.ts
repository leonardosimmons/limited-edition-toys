import { AppState } from '../../redux';
import { createSelector } from 'reselect';

const getId = (state: AppState) => state.dashboard.id;
const getInformation = (state: AppState) => state.dashboard.information;
const getPanel = (state: AppState) => state.dashboard.panel;
const getShipping = (state: AppState) => state.dashboard.shipping;

export const dashboardSelector = createSelector(
  [getId, getInformation, getPanel, getShipping],
  (id, info, panel, shipping) => ({
    id,
    information: info,
    panel,
    shipping,
  }),
);
