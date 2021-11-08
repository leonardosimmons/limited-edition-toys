import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getCategorySearchMenu = (state: AppState) =>
  state.ui.popups.categorySearchMenu;

const getNavbarSearchMenu = (state: AppState) =>
  state.ui.popups.navbarSearchMenu;

const getNavbarTagMenu = (state: AppState) => state.ui.popups.navbarTagMenu;

export const popupSelector = createSelector(
  [getCategorySearchMenu, getNavbarSearchMenu, getNavbarTagMenu],
  (category, searchBar, tagMenu) => ({
    categorySearchMenuOpen: category === 'open' ? true : false,
    navbarSearchMenuOpen: searchBar === 'open' ? true : false,
    navbarTagMenuOpen: tagMenu === 'open' ? true : false,
  }),
);
