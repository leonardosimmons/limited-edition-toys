import { createAction } from '@reduxjs/toolkit';
import { Product } from 'modules/product/types';

export const setCurrentPageNumber = createAction<number>(
  'page/setCurrentPageNumber',
);

export const setCurrentPaginationVersion = createAction<number>(
  'page/setPaginationVersion',
);

export const setFilteredProductList = createAction<Product[]>(
  'page/setFilteredProductList',
);

export const setElementsPerPage = createAction<number>(
  'page/setElementsPerPage',
);

export const setPreviousPaginationVersion = createAction<number>(
  'page/setPreviousPaginationVersion',
);
