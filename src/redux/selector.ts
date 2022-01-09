import { createSelector } from 'reselect';
import { cartSelector } from 'modules/cart/selectors';
import { checkoutSelector } from 'modules/checkout/selector';
import { dashboardSelector } from '../features/dashboard/selectors';
import { productSelector } from 'modules/product/selectors';
import { pageSelector } from './models/page/selectors';
import { searchSelector } from './models/search/selectors';
import { uiSelector } from './models/ui';

export const appSelector = createSelector(
  [
    cartSelector,
    checkoutSelector,
    dashboardSelector,
    pageSelector,
    productSelector,
    searchSelector,
    uiSelector,
  ],
  (cart, checkout, dashboard , page, product, search, ui) => ({
    cart,
    checkout,
    dashboard,
    page,
    product,
    search,
    ui,
  }),
);
