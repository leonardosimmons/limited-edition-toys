import { cartSelector } from 'models/cart/selectors';
import { productSelector } from 'models/product/selectors';
import { createSelector } from 'reselect';
import { pageSelector } from './models/page/selectors';
import { searchSelector } from './models/search/selectors';
import { uiSelector } from './models/ui';

export const appSelector = createSelector(
  [cartSelector, pageSelector, productSelector, searchSelector, uiSelector],
  (cart, page, product, search, ui) => ({
    cart,
    page,
    product,
    search,
    ui,
  }),
);
