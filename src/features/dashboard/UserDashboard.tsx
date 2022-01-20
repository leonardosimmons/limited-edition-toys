import React from 'react';
import data from '../../../data/dashboard.json';

import { useAppSelector } from '../../redux';
import { appSelector } from '../../redux/selector';
import { useDashboard } from './hooks/useDashboard';

import { Dashboard, DashboardTab, DashboardTabs } from './styles/Dashboard';

import Box from '@mui/material/Box';

import DashboardPanels from './components/DashboardPanels';

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
              <DashboardTab key={index} label={panel.label} {...a11yProps(index)} />
            ))}
          </DashboardTabs>
        )}
        <Box
          sx={{ position: 'relative', flex: 1, width: '100%', height: '100%' }}>
          <DashboardPanels value={ctx.dashboard.panel.current} />
        </Box>
      </Dashboard>
    </React.Fragment>
  );
};

export default UserDashBoard;
