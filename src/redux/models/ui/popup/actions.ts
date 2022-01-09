import { createAction } from '@reduxjs/toolkit';

export const openCategorySearchMenu = createAction('ui/openCategorySearchMenu');
export const closeCategorySearchMenu = createAction(
  'ui/closeCategorySearchMenu',
);

export const openDashboardMobileMenu = createAction('ui/openDashboardMobileMenu');
export const closeDashboardMobileMenu = createAction('ui/closeDashboardMobileMenu');

export const openNavbarSearchMenu = createAction('ui/openNavbarSearchMenu');
export const closeNavbarSearchMenu = createAction('ui/closeNavbarSearchMenu');

export const openNavbarTagMenu = createAction('ui/openNavbarTagMenu');
export const closeNavbarTagMenu = createAction('ui/closeNavbarTagMenu');

