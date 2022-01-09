import { useAppDispatch, useAppSelector } from '../../redux';
import { dashboardSelector } from '../dashboard/selectors';
import { setCurrentPanel } from '../dashboard/actions';


function useDashboard() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(dashboardSelector);

  function setPanel(selection: number) {
    dispatch(setCurrentPanel(selection));
  }

  return {
    panel: {
      current: ctx.panel.current,
      set: setPanel
    }
  }
}

export { useDashboard };