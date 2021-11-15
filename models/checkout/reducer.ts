import { createReducer } from '@reduxjs/toolkit';
import { Combinable } from 'utils/types';
import { updateBillingDetails, updateShippingDetails } from './actions';
import { BillingState, ShippingState } from './types';

export type CheckoutState = {
  billing: BillingState;
  shipping: ShippingState;
};

const initialState: CheckoutState = {
  billing: {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    apt: '',
    company: '',
  },
  shipping: {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    apt: '',
    company: '',
  },
};

export const checkoutReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(updateBillingDetails, (state, action) => {
      state.billing[action.payload.key] = action.payload.value;
    })
    .addCase(updateShippingDetails, (state, action) => {
      action.payload.key
        ? (state.shipping[action.payload.key] = action.payload.value as string)
        : (state.shipping = action.payload.value as ShippingState);
    }),
);
