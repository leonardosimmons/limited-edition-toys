import { createAction } from '@reduxjs/toolkit';
import { LoginStatus } from './types';

export const updateAuthLoginStatus = createAction<LoginStatus>(
  'auth/updateAuthLoginStatus',
);
