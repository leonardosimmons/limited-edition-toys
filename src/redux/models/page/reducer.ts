import { createReducer } from '@reduxjs/toolkit';
import {
  setCurrentPageNumber,
  setCurrentPaginationVersion,
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
};

const initialState: PageState = {
  pagination: {
    currentPage: 1,
    perPage: parseInt(
      process.env.NEXT_PUBLIC_DEFAULT_PRODUCTS_PER_PAGE as string,
    ),
    version: {
      current: 0,
      previous: 0,
    },
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
    .addCase(setElementsPerPage, (state, action) => {
      state.pagination.perPage = action.payload;
    })
    .addCase(setPreviousPaginationVersion, (state, action) => {
      state.pagination.version.previous = action.payload;
    }),
);
