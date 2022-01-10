import React from 'react';

import { useDashboard } from '../hooks/useDashboard';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { closeDashboardMobileMenu, openDashboardMobileMenu, uiSelector } from '../../../redux/models/ui';

import { DashboardSpeedDialBox } from '../styles/Dashboard';

import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';

type SpeedDialAction = {
  icon: JSX.Element,
  name: string,
  value: number,
}

const actions: SpeedDialAction[] = [
  { icon: <AssignmentTwoToneIcon />, name: 'WISHLIST', value: 3 },
  { icon: <LocalMallTwoToneIcon />, name: 'ORDERS', value: 2 },
  { icon: <LocalShippingTwoToneIcon />, name: 'SHIPPING', value: 1 },
  { icon: <AccountCircleTwoToneIcon />, name: 'INFORMATION', value: 0 },
]

const DashboardSpeedDial: React.FunctionComponent = (): JSX.Element => {
  const dashboard = useDashboard();
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(uiSelector);

  //* -------------------------------------------------
  // Handlers

  const handleOpen = () => dispatch(openDashboardMobileMenu());
  const handleClose = () => dispatch(closeDashboardMobileMenu());

  const handlePanelSelection = (selection: number) => {
    handleClose();
    dashboard.panel.set(selection);
  };

  return (
    <DashboardSpeedDialBox>
      <Backdrop open={ctx.dashboard.mobileMenu} />
      <SpeedDial
        ariaLabel={"User Dashboard Speed dial"}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={ctx.dashboard.mobileMenu}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handlePanelSelection(action.value)}
          />
        ))}
      </SpeedDial>
    </DashboardSpeedDialBox>
  )
}

export default DashboardSpeedDial;