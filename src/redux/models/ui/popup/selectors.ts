import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getCategorySearchMenu = (state: AppState) =>
  state.ui.popups.categorySearchMenu;

const getNavbarSearchMenu = (state: AppState) =>
  state.ui.popups.navbarSearchMenu;

export const popupSelector = createSelector(
  [getCategorySearchMenu, getNavbarSearchMenu],
  (category, searchBar) => ({
    categorySearchMenuOpen: category === 'open' ? true : false,
    navbarSearchMenuOpen: searchBar === 'open' ? true : false,
  }),
);
