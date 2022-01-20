import { ShippingInformation } from '../types';
import {
  setShippingInformation,
  setShippingInformationEditMode,
} from '../actions';

import { useAppDispatch, useAppSelector } from '../../../redux';
import { dashboardSelector } from '../selectors';

function useDashboardShipping() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(dashboardSelector);

  function setShipping(key: keyof ShippingInformation, value: string): void {
    dispatch(setShippingInformation(key, value));
  }

  function setEditMode(status: boolean): void {
    dispatch(setShippingInformationEditMode(status));
  }

  return {
    ...ctx.shipping,
    update: {
      info: setShipping,
    },
    editMode: setEditMode,
  };
}

export default useDashboardShipping;
