import { cartSelector } from 'models/cart/selectors';
import { checkoutSelector } from 'models/checkout/selector';
import { productSelector } from 'models/product/selectors';
import { createSelector } from 'reselect';
import { pageSelector } from './models/page/selectors';
import { searchSelector } from './models/search/selectors';
import { uiSelector } from './models/ui';

export const appSelector = createSelector(
  [
    cartSelector,
    checkoutSelector,
    pageSelector,
    productSelector,
    searchSelector,
    uiSelector,
  ],
  (cart, checkout, page, product, search, ui) => ({
    cart,
    checkout,
    page,
    product,
    search,
    ui,
  }),
);
