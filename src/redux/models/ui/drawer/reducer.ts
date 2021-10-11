import { createReducer } from '@reduxjs/toolkit';
import { OverlayState } from 'utils/types';
import { openNavbarMobileMenu, closeNavbarMobileMenu } from './actions';

type DrawerState = {
  navbarMobileMenu: OverlayState;
};

const initialState: DrawerState = {
  navbarMobileMenu: 'closed',
};

export const drawerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(closeNavbarMobileMenu, (state) => {
      state.navbarMobileMenu = 'closed';
    })
    .addCase(openNavbarMobileMenu, (state) => {
      state.navbarMobileMenu = 'open';
    });
});
