import { createAction } from '@reduxjs/toolkit';

// General
export const resetUi = createAction('ui/resetUi');

// Navbar
export const openNavbarMobileMenu = createAction('ui/openNavbarMobileMenu');
export const closeNavbarMobileMenu = createAction('ui/closeNavbarMobileMenu');

// Status
export const setViewportType = createAction<'desktop' | 'mobile' | undefined>(
  'ui/setViewportType',
);
