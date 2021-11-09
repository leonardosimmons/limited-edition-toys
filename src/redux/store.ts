import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { productReducer } from 'models/product/reducer';
import { pageReducer } from './models/page/reducer';
import { searchReducer } from './models/search/reducer';
import { uiReducer } from './models/ui/reducer';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    product: productReducer,
    search: searchReducer,
    ui: uiReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
