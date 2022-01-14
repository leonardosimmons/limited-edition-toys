import React from 'react';
import data from '../../../data/dashboard.json';

import { useAppSelector } from '../../redux';
import { appSelector } from '../../redux/selector';
import { useDashboard } from './hooks/useDashboard';
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
        {ctx.ui.status.viewport !== 'mobile' && (
          <DashboardTabs
            orientation="vertical"
            variant="standard"
            value={ctx.dashboard.panel.current}
            onChange={handleChange}
            aria-label="dashboard tabs">
            {data.panels.map((panel, index) => (
              <DashboardTab label={panel.label} {...a11yProps(index)} />
            ))}
          </DashboardTabs>
        )}
        <Box
          sx={{ position: 'relative', flex: 1, width: '100%', height: '100%' }}>
          {data.panels.map((panel, index) => (
            <DashboardPanel index={index} value={ctx.dashboard.panel.current}>
              {panel.name}
            </DashboardPanel>
          ))}
        </Box>
      </Dashboard>
    </React.Fragment>
  );
};

export default UserDashBoard;
