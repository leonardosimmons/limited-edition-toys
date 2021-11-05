import { createReducer } from '@reduxjs/toolkit';
import {
  minusProductQuantity,
  plusProductQuantity,
  resetCurrentProductSelection,
  resetProduct,
  resetProductInventoryLevel,
  resetProductQuantity,
  setCurrentProductSelection,
  setProductInventoryLevel,
} from './actions';
import { Product } from './types';

type ProductState = {
  current: Product;
  quantity: number;
  stock: number;
};

const initialState: ProductState = {
  current: {} as Product,
  quantity: 1,
  stock: 0,
};

export const productReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(minusProductQuantity, (state) => {
      if (state.quantity > 1) {
        state.quantity = --state.quantity;
      }
    })
    .addCase(plusProductQuantity, (state) => {
      if (state.quantity < state.stock) {
        state.quantity = ++state.quantity;
      }
    })
    .addCase(resetProductQuantity, (state) => {
      state.quantity = initialState.quantity;
    })
    .addCase(resetProduct, (state) => {
      state = initialState;
    })
    .addCase(resetCurrentProductSelection, (state) => {
      state.current = initialState.current;
    })
    .addCase(setCurrentProductSelection, (state, action) => {
      state.current = action.payload;
    })
    .addCase(resetProductInventoryLevel, (state) => {
      state.stock = initialState.stock;
    })
    .addCase(setProductInventoryLevel, (state, action) => {
      state.stock = action.payload;
    }),
);
