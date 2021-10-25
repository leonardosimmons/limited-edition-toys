import { createSelector } from 'reselect';

import { drawerSelector } from './drawer/selectors';
import { pageSelector } from './page/selectors';
import { popupSelector } from './popup/selectors';
import { uiStatusSelector } from './status/selectors';

export const uiSelector = createSelector(
  [drawerSelector, pageSelector, popupSelector, uiStatusSelector],
  (drawer, page, popup, status) => ({
    navbar: {
      categoryMenuOpen: popup.categorySearchMenuOpen,
      searchMenuOpen: popup.navbarSearchMenuOpen,
      mobileMenuOpen: drawer.navbarMobileMenuOpen,
    },
    page,
    status,
  }),
);
