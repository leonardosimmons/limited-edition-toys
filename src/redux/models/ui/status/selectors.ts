import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getViewport = (state: AppState) => state.ui.status.viewport;

export const uiStatusSelector = createSelector([getViewport], (viewport) => ({
  isMobile:
    viewport === 'mobile' && viewport !== undefined
      ? true
      : viewport === 'desktop'
      ? false
      : undefined,
}));
