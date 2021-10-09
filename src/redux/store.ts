import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { uiReducer } from './models/ui/reducer';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
