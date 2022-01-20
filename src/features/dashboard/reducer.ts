import { createReducer } from '@reduxjs/toolkit';
import {
  resetCurrentPanelSelection,
  setCurrentPanelSelection,
  setAccountInformation,
  setAccountInformationEditMode, setDashboardId,
} from './actions';

type DashboardState = {
  id: string;
  information: {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    status: {
      editMode: boolean;
    };
  };
  panel: {
    current: number;
  };
};

const initialState: DashboardState = {
  id: '',
  information: {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    status: {
      editMode: false,
    },
  },
  panel: {
    current: 0,
  },
};

export const dashboardReducer = createReducer(initialState, (builder) =>
  builder
    //* Auth ----------------------------------------------------
    .addCase(setDashboardId, (state, action) => {
      state.id = action.payload;
    })
    //* Account -------------------------------------------------
    .addCase(setAccountInformation, (state, action) => {
      state.information = {
        ...state.information,
        [action.payload.key]: action.payload.value,
      };
    })
    .addCase(setAccountInformationEditMode, (state, action) => {
      state.information.status.editMode = action.payload;
    })
    //* Panel ---------------------------------------------------
    .addCase(setCurrentPanelSelection, (state, action) => {
      state.panel.current = action.payload;
    })
    .addCase(resetCurrentPanelSelection, (state) => {
      state.panel.current = 0;
    }),
);
