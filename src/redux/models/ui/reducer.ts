import { combineReducers } from 'redux';

import { drawerReducer } from './drawer/reducer';
import { uiStatusReducer } from './status/reducer';

export const uiReducer = combineReducers({
  drawer: drawerReducer,
  status: uiStatusReducer,
});
