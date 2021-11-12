import { createReducer } from '@reduxjs/toolkit';
import { ProductCartToken } from 'models/product/types';
import {
  addProductToCart,
  removeCartUser,
  removeProductFromCart,
  resetCart,
  setCartUser,
  updateCartStatus,
  updateProductQuantity,
  updateProductTotal,
} from './actions';
import { CartStatus } from './types';

type CartState = {
  items: ProductCartToken[];
  status: CartStatus;
  userId: string;
};

const initialState: CartState = {
  items: [],
  status: 'empty',
  userId: '',
};

export const cartReducer = createReducer(initialState, (builder) =>
  builder
    //* Base ----------------------------------
    .addCase(resetCart, (state) => {
      state.items = initialState.items;
      state.status = initialState.status;
      state.userId = initialState.userId;
    })
    //* Products ------------------------------
    .addCase(addProductToCart, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(removeProductFromCart, (state, action) => {
      state.items = state.items.filter(
        (item: ProductCartToken) => item.product.id !== action.payload,
      );
    })
    .addCase(updateProductQuantity, (state, action) => {
      state.items.forEach((item: ProductCartToken) => {
        if (item.product.id === action.payload.id) {
          item.quantity = action.payload.amount;
        }
      });
    })
    .addCase(updateProductTotal, (state, action) => {
      state.items.forEach((item: ProductCartToken) => {
        if (item.product.id === action.payload.id) {
          item.total = action.payload.amount;
        }
      });
    })
    //* Status --------------------------------
    .addCase(updateCartStatus, (state, action) => {
      state.status = action.payload;
    })
    //* User ----------------------------------
    .addCase(removeCartUser, (state) => {
      state.userId = initialState.userId;
    })
    .addCase(setCartUser, (state, action) => {
      state.userId = action.payload;
    }),
);
