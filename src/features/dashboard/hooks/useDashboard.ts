import { dashboardSelector } from '../selectors';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  resetCurrentPanelSelection,
  setCurrentPanelSelection,
} from '../actions';
import useDashboardInformation from './useDashboardInformation';
import useDashboardShipping from './useDashboardShipping';

function useDashboard() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(dashboardSelector);
  const information = useDashboardInformation();
  const shipping = useDashboardShipping();

  function resetPanel() {
    dispatch(resetCurrentPanelSelection());
  }

  function setPanel(selection: number) {
    dispatch(setCurrentPanelSelection(selection));
  }

  return {
    id: ctx.id,
    information,
    panel: {
      current: ctx.panel.current,
      reset: resetPanel,
      set: setPanel,
    },
    shipping,
  };
}

export { useDashboard };
