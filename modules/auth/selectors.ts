import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getLoginStatus = (state: AppState) => state.auth.status;

export const authSelector = createSelector([getLoginStatus], (status) => ({
  status,
}));
