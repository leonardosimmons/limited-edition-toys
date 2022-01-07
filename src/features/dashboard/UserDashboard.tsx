import React from 'react';

import { useAppSelector } from '../../redux';
import { appSelector } from '../../redux/selector';

import { Dashboard, DashboardTab, DashboardTabs } from './styles/Dashboard';

import Box from '@mui/material/Box';

import DashboardPanel from './components/DashboardPanel';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

type UserDashBoardProps = {
  mobileSelection: number;
};

const UserDashBoard: React.FunctionComponent<UserDashBoardProps> = (
  {
    mobileSelection
  }
 ): JSX.Element => {
    const ctx = useAppSelector(appSelector);

    const [ value, setValue ] = React.useState<number>(0);

    React.useEffect(() => {
      setValue(mobileSelection)
    }, [mobileSelection]);

    function handleChange(e: React.SyntheticEvent, newValue: number) {
      setValue(newValue);
    }

    return (
      <React.Fragment>
        <Dashboard>
          { ctx.ui.status.viewport !== 'mobile' &&
            <DashboardTabs
              orientation="vertical"
              variant="standard"
              value={value}
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
            <DashboardPanel index={0} value={value}>
              Information Panel
            </DashboardPanel>
            <DashboardPanel index={1} value={value}>
              Shipping Panel
            </DashboardPanel>
            <DashboardPanel index={2} value={value}>
              Orders Panel
            </DashboardPanel>
            <DashboardPanel index={3} value={value}>
              Wishlist Panel
            </DashboardPanel>
          </Box>
        </Dashboard>
      </React.Fragment>
    );
  };

export default UserDashBoard;
