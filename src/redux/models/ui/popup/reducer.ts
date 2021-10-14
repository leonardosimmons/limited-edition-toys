import { createReducer } from '@reduxjs/toolkit';
import { OverlayState } from 'utils/types';
import {
  closeCategorySearchMenu,
  closeNavbarSearchMenu,
  openCategorySearchMenu,
  openNavbarSearchMenu,
} from './actions';

type PopupState = {
  navbarSearchMenu: OverlayState;
  categorySearchMenu: OverlayState;
};

const initialState: PopupState = {
  navbarSearchMenu: 'closed',
  categorySearchMenu: 'closed',
};

export const popupReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(openNavbarSearchMenu, (state) => {
      state.navbarSearchMenu = 'open';
    })
    .addCase(closeNavbarSearchMenu, (state) => {
      state.navbarSearchMenu = 'closed';
    })
    .addCase(openCategorySearchMenu, (state) => {
      state.categorySearchMenu = 'open';
    })
    .addCase(closeCategorySearchMenu, (state) => {
      state.categorySearchMenu = 'closed';
    }),
);
