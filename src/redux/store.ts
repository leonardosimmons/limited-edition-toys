import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { cartReducer } from 'models/cart/reducer';
import { checkoutReducer } from 'models/checkout/reducer';
import { productReducer } from 'models/product/reducer';
import { pageReducer } from './models/page/reducer';
import { searchReducer } from './models/search/reducer';
import { uiReducer } from './models/ui/reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    page: pageReducer,
    product: productReducer,
    search: searchReducer,
    ui: uiReducer,
  },
  devTools: process && process.env.NODE_ENV === 'development' ? true : false,
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
