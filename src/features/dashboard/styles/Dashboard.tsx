import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';

export const Dashboard = styled(Box)<BoxProps>(({ theme }) => ({
  width: '90%',
  height: '500px',
  ...theme.custom.center,
  margin: '4rem 0 1rem',
  borderRadius: '10px',
  border: `3px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.up('tabletMd')]: {
    width: '100%'
  },
  [theme.breakpoints.up('desktopMd')]: {
    marginBottom: '8rem'
  }
}));

export const DashboardTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  height: '100%',
  justifyContent: 'space-evenly',
  padding: '10px',
  borderRight: '1rem',
  borderColor: theme.palette.grey[200]
}));

export const DashboardTab = styled(Tab)<TabProps>(({ theme }) => ({
  padding: '1.25rem 1.75rem',
  '&:first-of-type': {
    borderTop: 0
  },
  '&:not(:first-of-type)': {
    borderTop: `1.5px solid ${theme.palette.grey[200]}`,
    borderBottom: `1.5px solid ${theme.palette.grey[200]}`,
  },
  '&:last-of-type': {
    borderBottom: 0
  }
}));

export const DashboardSpeedDialBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  flexGrow: 1,
  width: '100%',
  height: '100%',
  transform: 'translateZ(0px)',
  '& > div.MuiBackdrop-root': {
    height: '110%',
  },
  '& > div.MuiSpeedDial-root': {
    height: '100%',
    '& > *': {
      marginLeft: 'auto',
      marginRight: "1rem",
    },
    '& > button.MuiButtonBase-root': {
      minHeight: '52.5px',
      '& > span.MuiSpeedDialIcon-root': {
        minHeight: '35px'
      }
    }
  },
  '& .MuiSpeedDialAction-staticTooltipLabel': {
    borderRadius: '5px',
    fontSize: '1.2rem',
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '1.6rem'
    }
  },
  '& svg.MuiSvgIcon-root': {
    width: '.9em',
    height: '.9em'
  }
}))