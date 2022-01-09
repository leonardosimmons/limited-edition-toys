import { createAction } from '@reduxjs/toolkit';

export const setCurrentPanel = createAction<number>('dashboard/setCurrentPanel');
export const resetCurrentPanel = createAction('dashboard/resetCurrentPanel');