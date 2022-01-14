import { dashboardSelector } from '../selectors';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  resetCurrentPanelSelection,
  setCurrentPanelSelection,
} from '../actions';

function useDashboard() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(dashboardSelector);

  function resetPanel() {
    dispatch(resetCurrentPanelSelection());
  }

  function setPanel(selection: number) {
    dispatch(setCurrentPanelSelection(selection));
  }

  return {
    panel: {
      current: ctx.panel.current,
      reset: resetPanel,
      set: setPanel,
    },
  };
}

export { useDashboard };