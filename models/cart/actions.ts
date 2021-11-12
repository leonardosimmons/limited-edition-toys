import { createAction } from '@reduxjs/toolkit';
import { ProductCartToken } from 'models/product/types';
import { CartStatus } from './types';

function withUpdatePayload<T, U>() {
  return (id: T, amount: U) => ({
    payload: {
      id,
      amount,
    },
  });
}

//* -------------------------------------------------
// Base

export const resetCart = createAction('cart/resetCart');

//* -------------------------------------------------
// Products

export const addProductToCart = createAction<ProductCartToken>(
  'cart/addProductToCart',
);
export const removeProductFromCart = createAction<string>(
  'cart/removeProductFromCart',
);

export const updateProductQuantity = createAction(
  'cart/updateProductQuantity',
  withUpdatePayload<string, number>(),
);

export const updateProductTotal = createAction(
  'cart/updateProductTotal',
  withUpdatePayload<string, number>(),
);

//* -------------------------------------------------
// Status

export const updateCartStatus = createAction<CartStatus>(
  'cart/updateCartStatus',
);

//* -------------------------------------------------
// User

export const removeCartUser = createAction('cart/removeCartUser');
export const setCartUser = createAction<string>('cart/setCartUser');
