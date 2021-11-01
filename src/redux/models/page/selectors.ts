import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getCurrentPage = (state: AppState) => state.page.pagination.currentPage;

const getCurrentPaginationVersion = (state: AppState) =>
  state.page.pagination.version.current;

const getElementsPerPageAmount = (state: AppState) =>
  state.page.pagination.perPage;

const getPreviousPaginationVersion = (state: AppState) =>
  state.page.pagination.version.previous;

const getProducts = (state: AppState) => state.page.products;

export const pageSelector = createSelector(
  [
    getCurrentPage,
    getCurrentPaginationVersion,
    getElementsPerPageAmount,
    getPreviousPaginationVersion,
    getProducts,
  ],
  (currentPage, currentVersion, perPage, prevVersion, products) => ({
    current: currentPage,
    perPage,
    products,
    version: {
      current: currentVersion,
      previous: prevVersion,
    },
  }),
);
