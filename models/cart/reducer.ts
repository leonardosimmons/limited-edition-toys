import { createReducer } from '@reduxjs/toolkit';
import { Product } from 'models/product/types';
import {
  addProductToCart,
  removeCartUser,
  removeProductFromCart,
  resetCart,
  setCartUser,
  updateCartStatus,
} from './actions';
import { CartStatus } from './types';

type CartState = {
  items: Product[];
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
        (item: Product) => item.id !== action.payload,
      );
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
