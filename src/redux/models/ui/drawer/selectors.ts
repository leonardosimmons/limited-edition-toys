import { AppState } from 'src/redux';
import { createSelector } from 'reselect';

const getNavbarMobileMenuStatus = (state: AppState) =>
  state.ui.drawer.navbarMobileMenuOpen;

export const drawerSelector = createSelector(
  [getNavbarMobileMenuStatus],
  (navbarMobileMenu) => ({
    navbarMobileMenuOpen: navbarMobileMenu,
  }),
);
