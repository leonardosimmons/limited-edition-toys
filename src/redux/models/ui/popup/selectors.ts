import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getNavbarSearchMenu = (state: AppState) =>
  state.ui.popups.navbarSearchMenu;

export const popupSelector = createSelector(
  getNavbarSearchMenu,
  (searchMenu) => ({
    navbarSearchMenuOpen: searchMenu === 'open' ? true : false,
  }),
);
