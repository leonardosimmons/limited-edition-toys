import { createAction } from '@reduxjs/toolkit';
import { ProductCartToken } from 'modules/product/types';
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

export const addCartItemQuantity = createAction<string>(
  'checkout/addCartItemQuantity',
);

export const addProductToCart = createAction<ProductCartToken>(
  'cart/addProductToCart',
);
export const removeProductFromCart = createAction<string>(
  'cart/removeProductFromCart',
);
export const subtractCartItemQuantity = createAction<string>(
  'checkout/subtractCartItemQuantity',
);

export const updateProductQuantity = createAction(
  'cart/updateProductQuantity',
  withUpdatePayload<string, number>(),
);

export const updateProductTotal = createAction<string>(
  'cart/updateProductTotal',
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
