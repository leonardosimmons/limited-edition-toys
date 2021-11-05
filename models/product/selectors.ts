import { createSelector } from 'reselect';
import { AppState } from 'src/redux';
import { ProductInventory } from './types';

const getCurrentProduct = (state: AppState) => state.product.current;
const getProductQuantity = (state: AppState) => state.product.quantity;
const getProductInventoryLevel = (state: AppState) => state.product.stock;

const getInStockStatus = createSelector(
  getProductInventoryLevel,
  (count) => count > 0,
);

export const productSelector = createSelector(
  [
    getCurrentProduct,
    getProductQuantity,
    getProductInventoryLevel,
    getInStockStatus,
  ],
  (current, quantity, stock, inStock) => ({
    current,
    inventory: {
      level: stock,
      inStock,
    },
    quantity,
  }),
);
