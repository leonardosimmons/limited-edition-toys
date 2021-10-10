import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getNavbarSearchMenu = (state: AppState) =>
  state.ui.popup.navbarSearchMenuOpen;

export const popupSelector = createSelector(
  getNavbarSearchMenu,
  (searchMenu) => ({
    navbarSearchMenuOpen: searchMenu,
  }),
);
