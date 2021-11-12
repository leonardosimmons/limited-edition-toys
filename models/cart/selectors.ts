import { ProductCartToken } from 'models/product/types';
import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getItems = (state: AppState) => state.cart.items;
const getStatus = (state: AppState) => state.cart.status;
const getCartUser = (state: AppState) => state.cart.userId;

const getItemCount = createSelector(
  getItems,
  (items: ProductCartToken[]) => items.length,
);

const getCartTotal = createSelector(getItems, (items: ProductCartToken[]) => {
  let total: number = 0;
  items.forEach((item: ProductCartToken) => {
    total = total + item.total;
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
