import { createReducer } from '@reduxjs/toolkit';
import { VendProduct } from 'modules/product/types';
import { Default } from 'utils/keys';
import {
  setCurrentPageNumber,
  setCurrentPaginationVersion,
  setFilteredProductList,
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
  products: {
    filtered: VendProduct[];
  };
};

const initialState: PageState = {
  pagination: {
    currentPage: 1,
    perPage: Default.PRODUCTS_PER_PAGE as number,
    version: {
      current: 0,
      previous: 0,
    },
  },
  products: {
    filtered: [],
  },
};

export const pageReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setCurrentPageNumber, (state, action) => {
      state.pagination.currentPage = action.payload;
    })
    .addCase(setCurrentPaginationVersion, (state, action) => {
      state.pagination.version.current = action.payload;
    })
    .addCase(setFilteredProductList, (state, action) => {
      state.products.filtered = action.payload;
    })
    .addCase(setElementsPerPage, (state, action) => {
      state.pagination.perPage = action.payload;
    })
    .addCase(setPreviousPaginationVersion, (state, action) => {
      state.pagination.version.previous = action.payload;
    }),
);
