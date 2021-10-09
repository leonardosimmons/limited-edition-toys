import { AppState } from 'src/redux';
import { createSelector } from 'reselect';

const getNavbarStatus = (state: AppState) => state.ui.navbar;
const getViewportType = (state: AppState) => state.ui.viewport;

export const uiSelector = createSelector(
  [getNavbarStatus, getViewportType],
  (navbar, viewport) => ({
    navbar,
    isMobile: viewport === 'mobile' ? true : false,
  }),
);
