import { createReducer } from '@reduxjs/toolkit';
import { closeNavbarSearchMenu, openNavbarSearchMenu } from './actions';

type PopupState = {
  navbarSearchMenuOpen: boolean;
};

const initialState: PopupState = {
  navbarSearchMenuOpen: false,
};

export const popupReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(openNavbarSearchMenu, (state) => {
      state.navbarSearchMenuOpen = true;
    })
    .addCase(closeNavbarSearchMenu, (state) => {
      state.navbarSearchMenuOpen = false;
    }),
);
