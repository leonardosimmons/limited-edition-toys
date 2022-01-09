import React from 'react';

import { useAppSelector } from '../../redux';
import { appSelector } from '../../redux/selector';
import { useDashboard } from '../hooks/useDashboard';
import { useUser } from '../../../modules/user/hooks/useUser';

import { Dashboard, DashboardTab, DashboardTabs } from './styles/Dashboard';

import Box from '@mui/material/Box';

import DashboardPanel from './components/DashboardPanel';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const UserDashBoard: React.FunctionComponent = (): JSX.Element => {
  const dashboard = useDashboard();
  const ctx = useAppSelector(appSelector);

  //* -------------------------------------------------
  // Panel Selection

  function handleChange(e: React.SyntheticEvent, newValue: number) {
    dashboard.panel.set(newValue);
  }

//* -------------------------------------------------
// User
  const user = useUser();

  return (
    <React.Fragment>
      <Dashboard>
        { ctx.ui.status.viewport !== 'mobile' &&
          <DashboardTabs
            orientation="vertical"
            variant="standard"
            value={ctx.dashboard.panel.current}
            onChange={handleChange}
            aria-label="dashboard tabs"
          >
            <DashboardTab label="Information" {...a11yProps(0)} />
            <DashboardTab label="Shipping" {...a11yProps(1)} />
            <DashboardTab label="Orders" {...a11yProps(2)} />
            <DashboardTab label="Wishlist" {...a11yProps(3)} />
          </DashboardTabs>
        }
        <Box sx={{ position: 'relative', flex: 1, width: '100%', height: '100%'}}>
          <DashboardPanel index={0} value={ctx.dashboard.panel.current}>
            Information Panel
          </DashboardPanel>
          <DashboardPanel index={1} value={ctx.dashboard.panel.current}>
            Shipping Panel
          </DashboardPanel>
          <DashboardPanel index={2} value={ctx.dashboard.panel.current}>
            Orders Panel
          </DashboardPanel>
          <DashboardPanel index={3} value={ctx.dashboard.panel.current}>
            Wishlist Panel
          </DashboardPanel>
        </Box>
      </Dashboard>
    </React.Fragment>
  );
};

export default UserDashBoard;
