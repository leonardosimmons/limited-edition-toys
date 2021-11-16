import { createSelector } from 'reselect';
import { AppState } from 'src/redux';

const getShippingCheckboxStatus = (state: AppState) =>
  state.ui.checkboxes.shipping;

export const checkboxSelector = createSelector(
  getShippingCheckboxStatus,
  (shipping) => ({
    shipping: {
      isChecked: shipping,
    },
  }),
);
