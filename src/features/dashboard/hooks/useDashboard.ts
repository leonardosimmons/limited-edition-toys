import { dashboardSelector } from '../selectors';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  resetCurrentPanelSelection,
  setCurrentPanelSelection,
} from '../actions';
import useDashboardInformation from './useDashboardInformation';

function useDashboard() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(dashboardSelector);
  const information = useDashboardInformation();

  function resetPanel() {
    dispatch(resetCurrentPanelSelection());
  }

  function setPanel(selection: number) {
    dispatch(setCurrentPanelSelection(selection));
  }

  return {
    information,
    panel: {
      current: ctx.panel.current,
      reset: resetPanel,
      set: setPanel,
    },
  };
}

export { useDashboard };
