import { createSelector } from 'reselect';
import { cartSelector } from 'modules/cart/selectors';
import { checkoutSelector } from 'modules/checkout/selector';
import { dashboardSelector } from '../features/dashboard/selectors';
import { productSelector } from 'modules/product/selectors';
import { pageSelector } from './models/page/selectors';
import { searchSelector } from './models/search/selectors';
import { uiSelector } from './models/ui';
import { authSelector } from '../../modules/auth/selectors';

export const appSelector = createSelector(
  [
    authSelector,
    cartSelector,
    checkoutSelector,
    dashboardSelector,
    pageSelector,
    productSelector,
    searchSelector,
    uiSelector,
  ],
  (auth, cart, checkout, dashboard , page, product, search, ui) => ({
    auth,
    cart,
    checkout,
    dashboard,
    page,
    product,
    search,
    ui,
  }),
);
