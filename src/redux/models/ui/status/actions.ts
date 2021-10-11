import { createAction } from '@reduxjs/toolkit';
import { UiStatus, Viewport } from 'utils/types';

// Status
export const setStatus = createAction<UiStatus>('ui/setStatus');
export const setViewportType = createAction<Viewport>('ui/setViewportType');
