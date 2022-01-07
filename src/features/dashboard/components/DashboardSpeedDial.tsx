import React from 'react';

import { DashboardSpeedDialBox } from '../styles/Dashboard';

import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';

type Props = {
  panelHandler: (value: number) => void
}

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

const DashboardSpeedDial: React.FunctionComponent<Props> = (
  {
    panelHandler
  }
): JSX.Element => {
  const [ open, setOpen ] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <DashboardSpeedDialBox>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel={"User Dashboard Speed dial"}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              handleClose();
              panelHandler(action.value);
            }}
          />
        ))}
      </SpeedDial>
    </DashboardSpeedDialBox>
  )
}

export default DashboardSpeedDial;