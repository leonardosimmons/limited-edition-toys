import { createSelector } from 'reselect';
import { checkboxSelector } from './checkbox/selector';

import { drawerSelector } from './drawer/selectors';
import { popupSelector } from './popup/selectors';
import { uiStatusSelector } from './status/selectors';

export const uiSelector = createSelector(
  [checkboxSelector, drawerSelector, popupSelector, uiStatusSelector],
  (checkbox, drawer, popup, status) => ({
    checkboxes: {
      shipping: checkbox.shipping,
    },
    dashboard: {
      mobileMenu: popup.dashboardMobileMenuOpen
    },
    navbar: {
      categoryMenuOpen: popup.categorySearchMenuOpen,
      searchMenuOpen: popup.navbarSearchMenuOpen,
      tagMenuOpen: popup.navbarTagMenuOpen,
      mobileMenuOpen: drawer.navbarMobileMenuOpen,
    },
    status,
  }),
);
