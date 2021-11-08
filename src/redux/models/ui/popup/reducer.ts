import { createReducer } from '@reduxjs/toolkit';
import { OverlayState } from 'utils/types';
import { closeNavbarTagMenu, openNavbarTagMenu } from '..';
import {
  closeCategorySearchMenu,
  closeNavbarSearchMenu,
  openCategorySearchMenu,
  openNavbarSearchMenu,
} from './actions';

type PopupState = {
  navbarSearchMenu: OverlayState;
  navbarTagMenu: OverlayState;
  categorySearchMenu: OverlayState;
};

const initialState: PopupState = {
  navbarSearchMenu: 'closed',
  navbarTagMenu: 'closed',
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
    .addCase(openNavbarTagMenu, (state) => {
      state.navbarTagMenu = 'open';
    })
    .addCase(closeNavbarTagMenu, (state) => {
      state.navbarTagMenu = 'closed';
    })
    .addCase(openCategorySearchMenu, (state) => {
      state.categorySearchMenu = 'open';
    })
    .addCase(closeCategorySearchMenu, (state) => {
      state.categorySearchMenu = 'closed';
    }),
);
