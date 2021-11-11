import { createAction } from '@reduxjs/toolkit';
import { Product } from 'models/product/types';
import { CartStatus } from './types';

//* -------------------------------------------------
// Base

export const resetCart = createAction('cart/resetCart');

//* -------------------------------------------------
// Products

export const addProductToCart = createAction<Product>('cart/addProductToCart');
export const removeProductFromCart = createAction<string>(
  'cart/removeProductFromCart',
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
