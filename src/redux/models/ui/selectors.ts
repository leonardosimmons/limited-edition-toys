import { createSelector } from 'reselect';

import { drawerSelector } from './drawer/selectors';
import { uiStatusSelector } from './status/selectors';

export const uiSelector = createSelector(
  [drawerSelector, uiStatusSelector],
  (drawer, status) => ({
    drawers: drawer,
    status,
  }),
);
