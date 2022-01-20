import { createAction } from '@reduxjs/toolkit';
import { AccountInformation, ShippingInformation } from './types';

function withKeyValuePayload<K, V>() {
  return (key: K, value: V) => ({
    payload: {
      key,
      value,
    },
  });
}

//* Auth ----------------------------------------------------
export const setDashboardId = createAction<string>('dashboard/setDashboardId');

//* Account -------------------------------------------------
export const setAccountInformation = createAction(
  'dashboard/setAccountInformation',
  withKeyValuePayload<keyof AccountInformation, string>(),
);
export const setAccountInformationEditMode = createAction<boolean>(
  'dashboard/toggleAccountInformationEdit',
);

//* Panel ---------------------------------------------------
export const setCurrentPanelSelection = createAction<number>(
  'dashboard/setCurrentPanelSelection',
);
export const resetCurrentPanelSelection = createAction(
  'dashboard/resetCurrentPanelSelection',
);

//* Shipping -------------------------------------------------
export const setShippingInformation = createAction(
  'dashboard/setShippingInformation',
  withKeyValuePayload<keyof ShippingInformation, string>(),
);
export const setShippingInformationEditMode = createAction<boolean>(
  'dashboard/toggleShippingInformationEdit',
);
