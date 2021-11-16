import { createAction } from '@reduxjs/toolkit';

export const setShippingCheckbox = createAction<boolean>(
  'checkout/setShippingCheckbox',
);
