import { createAction } from '@reduxjs/toolkit';
import { UiStatus } from 'modules/ui/types';
import { Viewport } from 'utils/types';

// Status
export const setStatus = createAction<UiStatus>('ui/setStatus');
export const setViewportType = createAction<Viewport>('ui/setViewportType');
