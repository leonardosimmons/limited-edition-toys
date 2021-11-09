import { createAction } from '@reduxjs/toolkit';
import { Product } from 'models/product/types';

export const resetUserSearch = createAction('search/resetUserSearch');

export const resetCurrentSearchInput = createAction(
  'search/resetCurrentSearchInput',
);
export const setCurrentSearchInput = createAction<string>(
  'search/setCurrentSearchInput',
);

export const resetSearchRequest = createAction('search/resetSearchRequest');
export const setSearchRequest = createAction<string>('search/setSearchRequest');

export const resetSearchResult = createAction('search/resetSearchResults');
export const setSearchResult = createAction<Product[]>(
  'search/setSearchResults',
);
