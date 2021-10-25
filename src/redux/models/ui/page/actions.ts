import { createAction } from '@reduxjs/toolkit';
import { Combinable, UiStatus } from 'utils/types';

export const setCurrentPageNumber = createAction<number>(
  'page/setCurrentPageNumber',
);

export const setCurrentPaginationVersion = createAction<number>(
  'page/setPaginationVersion',
);

export const setElementsPerPage = createAction<number>(
  'page/setElementsPerPage',
);

export const setPreviousPaginationVersion = createAction<number>(
  'page/setPreviousPaginationVersion',
);
