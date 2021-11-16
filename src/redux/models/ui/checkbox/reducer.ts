import { createReducer } from '@reduxjs/toolkit';
import { setShippingCheckbox } from './actions';

type CheckboxState = {
  shipping: boolean;
};

const initialState: CheckboxState = {
  shipping: false,
};

export const checkboxReducer = createReducer(initialState, (builder) =>
  builder.addCase(setShippingCheckbox, (state, action) => {
    state.shipping = action.payload;
  }),
);
