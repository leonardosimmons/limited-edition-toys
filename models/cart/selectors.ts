import { Product } from 'models/product/types';
import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getItems = (state: AppState) => state.cart.items;
const getStatus = (state: AppState) => state.cart.status;
const getCartUser = (state: AppState) => state.cart.userId;

const getItemCount = createSelector(
  getItems,
  (items: Product[]) => items.length,
);

const getCartTotal = createSelector(getItems, (items: Product[]) => {
  let total: number = 0;
  items.forEach((item: Product) => {
    total = total + item.price_excluding_tax!;
  });
  return total;
});

export const cartSelector = createSelector(
  [getItems, getStatus, getCartUser, getItemCount, getCartTotal],
  (items, status, userId, count, total) => ({
    count,
    items,
    status,
    total,
    userId,
  }),
);
