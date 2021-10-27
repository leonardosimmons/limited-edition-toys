import { createSelector } from 'reselect';

import { drawerSelector } from './drawer/selectors';
import { popupSelector } from './popup/selectors';
import { uiStatusSelector } from './status/selectors';

export const uiSelector = createSelector(
  [drawerSelector, popupSelector, uiStatusSelector],
  (drawer, popup, status) => ({
    navbar: {
      categoryMenuOpen: popup.categorySearchMenuOpen,
      searchMenuOpen: popup.navbarSearchMenuOpen,
      mobileMenuOpen: drawer.navbarMobileMenuOpen,
    },
    status,
  }),
);
