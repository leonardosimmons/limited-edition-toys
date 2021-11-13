import { ProductCartToken } from 'models/product/types';
import { createSelector } from 'reselect';
import { AppState } from 'src/redux';
import { CartModel } from './cart.model';

const getItems = (state: AppState) => state.cart.items;
const getStatus = (state: AppState) => state.cart.status;
const getCartUser = (state: AppState) => state.cart.userId;

const getItemCount = createSelector(getItems, (items: ProductCartToken[]) =>
  CartModel.getCount(items),
);

const getCartTotal = createSelector(getItems, (items: ProductCartToken[]) =>
  CartModel.getTotal(items),
);

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
