import { createAction } from '@reduxjs/toolkit';
import { BillingState, ShippingState } from './types';

function withUpdatePayload<T, U>() {
  return (key: T, value: U) => ({
    payload: {
      key,
      value,
    },
  });
}

export const updateBillingDetails = createAction(
  'checkout/updateBillingDetails',
  withUpdatePayload<keyof BillingState, string>(),
);

export const updateShippingDetails = createAction(
  'checkout/updateShipping',
  withUpdatePayload<keyof ShippingState | null, string | ShippingState>(),
);
