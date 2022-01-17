import { useAppDispatch, useAppSelector } from '../../../redux';
import { dashboardSelector } from '../selectors';
import {
  setAccountInformation,
  setAccountInformationEditMode,
} from '../actions';

function useDashboardInformation() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(dashboardSelector);

  function setInformation(key: string, value: string): void {
    dispatch(setAccountInformation(key, value));
  }

  function setEditMode(status: boolean): void {
    dispatch(setAccountInformationEditMode(status));
  }

  return {
    ...ctx.information,
    update: {
      info: setInformation,
    },
    editMode: setEditMode
  };
}

export default useDashboardInformation;
