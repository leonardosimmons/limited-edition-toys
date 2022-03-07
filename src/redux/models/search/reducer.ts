import { createReducer } from '@reduxjs/toolkit';
import { VendProduct } from 'modules/product/types';
import {
  resetCurrentSearchInput,
  resetSearchRequest,
  resetSearchResult,
  resetUserSearch,
  setCurrentSearchInput,
  setSearchRequest,
  setSearchResult,
} from './actions';

type SearchState = {
  input: string;
  request: string;
  result: VendProduct[];
};

const initialState: SearchState = {
  input: '',
  request: '',
  result: [],
};

export const searchReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(resetUserSearch, (state) => {
      state.input = initialState.input;
      state.request = initialState.request;
      state.result = initialState.result;
    })
    .addCase(resetCurrentSearchInput, (state) => {
      state.input = initialState.request;
    })
    .addCase(resetSearchRequest, (state) => {
      state.request = initialState.request;
    })
    .addCase(resetSearchResult, (state) => {
      state.result = initialState.result;
    })
    .addCase(setCurrentSearchInput, (state, action) => {
      state.input = action.payload;
    })
    .addCase(setSearchRequest, (state, action) => {
      state.request = action.payload;
    })
    .addCase(setSearchResult, (state, action) => {
      state.result = action.payload;
    }),
);
