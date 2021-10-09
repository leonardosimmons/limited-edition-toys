import { createReducer } from '@reduxjs/toolkit';
import { resetUi } from '.';
import {
  openNavbarMobileMenu,
  closeNavbarMobileMenu,
  setViewportType,
} from './actions';

type UiState = {
  navbar: {
    mobileMenuOpen: boolean;
  };
  viewport: 'desktop' | 'mobile' | undefined;
};

const initialState: UiState = {
  navbar: {
    mobileMenuOpen: false,
  },
  viewport: undefined,
};

export const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(closeNavbarMobileMenu, (state) => {
      state.navbar.mobileMenuOpen = false;
    })
    .addCase(openNavbarMobileMenu, (state) => {
      state.navbar.mobileMenuOpen = true;
    })
    .addCase(resetUi, (state) => {
      state.viewport = undefined;
      state.navbar.mobileMenuOpen = false;
    })
    .addCase(setViewportType, (state, action) => {
      state.viewport = action.payload;
    });
});
