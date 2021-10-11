import { createReducer } from '@reduxjs/toolkit';
import { OverlayState } from 'utils/types';
import { closeNavbarSearchMenu, openNavbarSearchMenu } from './actions';

type PopupState = {
  navbarSearchMenu: OverlayState;
};

const initialState: PopupState = {
  navbarSearchMenu: 'closed',
};

export const popupReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(openNavbarSearchMenu, (state) => {
      state.navbarSearchMenu = 'open';
    })
    .addCase(closeNavbarSearchMenu, (state) => {
      state.navbarSearchMenu = 'closed';
    }),
);
