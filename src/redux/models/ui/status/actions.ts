import { createAction } from '@reduxjs/toolkit';

// Status
export const setStatus = createAction<
  'completed' | 'error' | 'loading' | 'ready'
>('ui/setStatus');

export const setViewportType = createAction<'desktop' | 'mobile' | undefined>(
  'ui/setViewportType',
);
