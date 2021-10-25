import { combineReducers } from 'redux';

import { drawerReducer } from './drawer/reducer';
import { pageReducer } from './page/reducer';
import { popupReducer } from './popup/reducer';
import { uiStatusReducer } from './status/reducer';

export const uiReducer = combineReducers({
  drawers: drawerReducer,
  page: pageReducer,
  popups: popupReducer,
  status: uiStatusReducer,
});
