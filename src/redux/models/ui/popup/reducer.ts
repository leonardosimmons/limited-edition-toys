import { createReducer } from '@reduxjs/toolkit';
import { OverlayState } from 'utils/types';
import { closeDashboardMobileMenu, closeNavbarTagMenu, openDashboardMobileMenu, openNavbarTagMenu } from '..';
import {
  closeCategorySearchMenu,
  closeNavbarSearchMenu,
  openCategorySearchMenu,
  openNavbarSearchMenu,
} from './actions';

type PopupState = {
  categorySearchMenu: OverlayState;
  dashboardMobileMenu: OverlayState;
  navbarSearchMenu: OverlayState;
  navbarTagMenu: OverlayState;
};

const initialState: PopupState = {
  categorySearchMenu: 'closed',
  dashboardMobileMenu: 'closed',
  navbarSearchMenu: 'closed',
  navbarTagMenu: 'closed',
};

export const popupReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(openCategorySearchMenu, (state) => {
      state.categorySearchMenu = 'open';
    })
    .addCase(closeCategorySearchMenu, (state) => {
      state.categorySearchMenu = 'closed';
    })
    .addCase(openDashboardMobileMenu, (state) => {
      state.dashboardMobileMenu = 'open'
    })
    .addCase(closeDashboardMobileMenu, (state) => {
      state.dashboardMobileMenu = 'closed'
    })
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
);
