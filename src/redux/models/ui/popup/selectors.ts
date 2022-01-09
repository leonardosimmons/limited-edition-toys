import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getCategorySearchMenu = (state: AppState) =>
  state.ui.popups.categorySearchMenu;

const getDashboardMobileMenu = (state: AppState) =>
  state.ui.popups.dashboardMobileMenu;

const getNavbarSearchMenu = (state: AppState) =>
  state.ui.popups.navbarSearchMenu;

const getNavbarTagMenu = (state: AppState) => state.ui.popups.navbarTagMenu;

export const popupSelector = createSelector(
  [getCategorySearchMenu, getDashboardMobileMenu, getNavbarSearchMenu, getNavbarTagMenu],
  (category, dashboardMenu, searchBar, tagMenu) => ({
    categorySearchMenuOpen: category === 'open',
    dashboardMobileMenuOpen: dashboardMenu === 'open',
    navbarSearchMenuOpen: searchBar === 'open',
    navbarTagMenuOpen: tagMenu === 'open',
  }),
);
