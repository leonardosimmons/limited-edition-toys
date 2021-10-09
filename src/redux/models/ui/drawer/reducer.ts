import { createReducer } from '@reduxjs/toolkit';
import {
  openNavbarMobileMenu,
  closeNavbarMobileMenu,
  resetUi,
  setViewportType,
} from './actions';

type DrawerState = {
  navbarMobileMenuOpen: boolean;
};

const initialState: DrawerState = {
  navbarMobileMenuOpen: false,
};

export const drawerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(closeNavbarMobileMenu, (state) => {
      state.navbarMobileMenuOpen = false;
    })
    .addCase(openNavbarMobileMenu, (state) => {
      state.navbarMobileMenuOpen = true;
    });
});
