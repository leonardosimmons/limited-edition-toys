import { createAction } from '@reduxjs/toolkit';

// Status
export const setViewportType = createAction<'desktop' | 'mobile' | undefined>(
  'ui/setViewportType',
);
