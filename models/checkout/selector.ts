import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getBillingDetails = (state: AppState) => state.checkout.billing;
const getShippingDetails = (state: AppState) => state.checkout.shipping;

export const checkoutSelector = createSelector(
  [getBillingDetails, getShippingDetails],
  (billing, shipping) => ({
    billing,
    shipping,
  }),
);
