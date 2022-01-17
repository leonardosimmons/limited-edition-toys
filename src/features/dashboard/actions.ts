import { createAction } from '@reduxjs/toolkit';

function withKeyValuePayload<K, V>() {
  return (key: K, value: V) => ({
    payload: {
      key,
      value,
    },
  });
}

//* Account -------------------------------------------------
export const setAccountInformation = createAction(
  'dashboard/setAccountInformation',
  withKeyValuePayload<string, string>(),
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
