import { createAction } from '@reduxjs/toolkit';
import { Product, ProductInventory } from './types';

export const resetProduct = createAction('product/resetProduct');

//* -------------------------------------------------
// Quantity

export const minusProductQuantity = createAction(
  'product/minusProductQuantity',
);

export const plusProductQuantity = createAction('product/plusProductQuantiy');

export const resetProductQuantity = createAction(
  'product/resetProductQuantity',
);

//* -------------------------------------------------
// Selection

export const resetCurrentProductSelection = createAction(
  'product/resetCurrentProductSelection',
);

export const setCurrentProductSelection = createAction<Product>(
  'product/setCurrentProductSelection',
);

//* -------------------------------------------------
// Inventory

export const resetProductInventoryLevel = createAction(
  'product/resetProductInventoryLevel',
);

export const setProductInventoryLevel = createAction<number>(
  'product/setProductInventoryLevel',
);
