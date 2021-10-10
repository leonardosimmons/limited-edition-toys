import { combineReducers } from 'redux';

import { drawerReducer } from './drawer/reducer';
import { popupReducer } from './popup/reducer';
import { uiStatusReducer } from './status/reducer';

export const uiReducer = combineReducers({
  drawer: drawerReducer,
  popup: popupReducer,
  status: uiStatusReducer,
});
