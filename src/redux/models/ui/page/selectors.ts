import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getCurrentPage = (state: AppState) =>
  state.ui.page.pagination.currentPage;

const getCurrentPaginationVersion = (state: AppState) =>
  state.ui.page.pagination.version.current;

const getElementsPerPageAmount = (state: AppState) =>
  state.ui.page.pagination.perPage;

const getPreviousPaginationVersion = (state: AppState) =>
  state.ui.page.pagination.version.previous;

export const pageSelector = createSelector(
  [
    getCurrentPage,
    getCurrentPaginationVersion,
    getElementsPerPageAmount,
    getPreviousPaginationVersion,
  ],
  (currentPage, currentVersion, perPage, prevVersion) => ({
    current: currentPage,
    perPage,
    version: {
      current: currentVersion,
      previous: prevVersion,
    },
  }),
);
