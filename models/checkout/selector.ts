import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getBillingDetails = (state: AppState) => state.checkout.billing;

export const checkoutSelector = createSelector(
  getBillingDetails,
  (details) => ({
    billing: details,
  }),
);
