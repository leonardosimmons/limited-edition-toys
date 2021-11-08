import { createAction } from '@reduxjs/toolkit';

export const openNavbarSearchMenu = createAction('ui/openNavbarSearchMenu');
export const closeNavbarSearchMenu = createAction('ui/closeNavbarSearchMenu');

export const openNavbarTagMenu = createAction('ui/openNavbarTagMenu');
export const closeNavbarTagMenu = createAction('ui/closeNavbarTagMenu');

export const openCategorySearchMenu = createAction('ui/openCategorySearchMenu');
export const closeCategorySearchMenu = createAction(
  'ui/closeCategorySearchMenu',
);
