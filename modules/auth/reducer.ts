import { createReducer } from '@reduxjs/toolkit';
import { updateAuthLoginStatus } from './actions';
import { LoginStatus } from './types';

type AuthState = {
  status: LoginStatus;
};

const initialState: AuthState = {
  status: 'guest',
};

export const authReducer = createReducer(initialState, (builder) =>
  builder.addCase(updateAuthLoginStatus, (state, action) => {
    state.status = action.payload;
  }),
);
