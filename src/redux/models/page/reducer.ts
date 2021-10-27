import { createReducer } from '@reduxjs/toolkit';
import { Product } from 'models/product/types';
import { Default } from 'utils/keys';
import {
  setCurrentPageNumber,
  setCurrentPaginationVersion,
  setCurrentProductList,
  setElementsPerPage,
  setPreviousPaginationVersion,
} from './actions';

type PageState = {
  pagination: {
    currentPage: number;
    perPage: number;
    version: {
      current: number;
      previous: number;
    };
  };
  products: Product[];
};

const initialState: PageState = {
  pagination: {
    currentPage: 1,
    perPage: Default.PRODUCTS_PER_PAGE,
    version: {
      current: 0,
      previous: 0,
    },
  },
  products: [],
};

export const pageReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setCurrentPageNumber, (state, action) => {
      state.pagination.currentPage = action.payload;
    })
    .addCase(setCurrentPaginationVersion, (state, action) => {
      state.pagination.version.current = action.payload;
    })
    .addCase(setCurrentProductList, (state, action) => {
      state.products = action.payload;
    })
    .addCase(setElementsPerPage, (state, action) => {
      state.pagination.perPage = action.payload;
    })
    .addCase(setPreviousPaginationVersion, (state, action) => {
      state.pagination.version.previous = action.payload;
    }),
);
