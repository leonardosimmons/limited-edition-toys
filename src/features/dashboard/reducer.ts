import { createReducer } from '@reduxjs/toolkit';
import {
  resetCurrentPanelSelection,
  setCurrentPanelSelection,
  setAccountInformation,
  setAccountInformationEditMode,
  setDashboardId,
  setShippingInformation,
  setShippingInformationEditMode,
} from './actions';
import { AccountInformation, ShippingInformation } from './types';

type DashboardState = {
  id: string;
  information: AccountInformation & {
    status: {
      editMode: boolean;
    };
  };
  panel: {
    current: number;
  };
  shipping: ShippingInformation & {
    status: {
      editMode: boolean;
    };
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
  shipping: {
    addressOne: '',
    apt: '',
    city: '',
    state: '',
    postcode: '',
    status: {
      editMode: false,
    },
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
    })
    //* Shipping -------------------------------------------------
    .addCase(setShippingInformation, (state, action) => {
      state.shipping = {
        ...state.shipping,
        [action.payload.key]: action.payload.value,
      };
    })
    .addCase(setShippingInformationEditMode, (state, action) => {
      state.shipping.status.editMode = action.payload;
    }),
);
