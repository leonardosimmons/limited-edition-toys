import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getCurrentInput = (state: AppState) => state.search.input;
const getSearchRequest = (state: AppState) => state.search.request;
const getSearchResult = (state: AppState) => state.search.result;

export const searchSelector = createSelector(
  [getCurrentInput, getSearchRequest, getSearchResult],
  (input, searchRequest, searchResult) => ({
    input,
    request: searchRequest,
    result: searchResult,
  }),
);
