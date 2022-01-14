import { createAction } from '@reduxjs/toolkit';

export const setCurrentPanelSelection = createAction<number>('dashboard/setCurrentPanelSelection');
export const resetCurrentPanelSelection = createAction('dashboard/resetCurrentPanelSelection');