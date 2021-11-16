import { combineReducers } from 'redux';
import { checkboxReducer } from './checkbox/reducer';

import { drawerReducer } from './drawer/reducer';
import { popupReducer } from './popup/reducer';
import { uiStatusReducer } from './status/reducer';

export const uiReducer = combineReducers({
  checkboxes: checkboxReducer,
  drawers: drawerReducer,
  popups: popupReducer,
  status: uiStatusReducer,
});
