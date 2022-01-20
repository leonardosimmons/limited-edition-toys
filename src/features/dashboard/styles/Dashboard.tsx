import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import Button, { ButtonProps } from '@mui/material/Button';

interface StyledDashboardInputWrapper extends BoxProps {
  type?: 'input' | 'text';
}

interface StyledDashboardInputButton extends ButtonProps {
  status: 'error' | 'pending' | 'success';
}

export const Dashboard = styled(Box)<BoxProps>(({ theme }) => ({
  width: '90%',
  height: '550px',
  ...theme.custom.center,
  margin: '4rem 0 1rem',
  borderRadius: '10px',
  border: `3px solid ${theme.palette.grey[200]}`,
  boxShadow: `2px 2px 0 ${theme.palette.grey[300]}, -1px -1px 0 ${theme.palette.grey[300]}, 1px -1px 0 ${theme.palette.grey[300]}, -1px 1px 0 ${theme.palette.grey[300]}, 1px 1px 0 ${theme.palette.grey[300]}`,
  [theme.breakpoints.up('tabletMd')]: {
    width: '100%',
  },
  [theme.breakpoints.up('desktopMd')]: {
    marginBottom: '8rem',
  },
}));

export const DashboardInputWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type',
})<StyledDashboardInputWrapper>(({ type, theme }) => ({
  ...theme.custom.center,
  justifyContent: 'flex-start',
  marginBottom: '1rem',
  '& > h6.MuiTypography-h6': {
    fontSize: '1.6rem',
    flex: '0 1 25%',
  },
  ...(type &&
    type === 'text' && {
      alignItems: 'flex-end',
      height: '3rem',
    }),
}));

export const DashboardCustomInput = styled('input')(({ theme }) => ({
  width: '320px',
  fontSize: '1rem',
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 400,
  lineHeight: 1.5,
  color: theme.palette.grey[900],
  background: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '8px',
  padding: '12px 12px',
  transition: 'all 150ms ease',
  '&:hover': {
    background: theme.palette.grey[100],
    borderColor: theme.palette.grey[400],
  },
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
}));

export const DashboardInputButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'status',
})<StyledDashboardInputButton>(({ status, theme }) => ({
  marginLeft: '20px',
  fontSize: '1rem',
  '&:active': {
    transform: 'translateY(2px)',
  },
  ...(status === 'success' && {
    backgroundColor: 'green',
  }),
  ...(status === 'error' && {
    backgroundColor: 'red',
  }),
}));

export const DashboardLoadSpinner = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: '150px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DashboardTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  height: '100%',
  justifyContent: 'space-evenly',
  borderRight: `1px solid ${theme.palette.grey[200]}`,
}));

export const DashboardTab = styled(Tab)<TabProps>(({ theme }) => ({
  padding: '1.25rem 1.75rem',
  '&:first-of-type': {
    borderTop: 0,
  },
  '&:not(:first-of-type)': {
    borderTop: `1.5px solid ${theme.palette.grey[200]}`,
    borderBottom: `1.5px solid ${theme.palette.grey[200]}`,
  },
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
      marginRight: '1rem',
    },
    '& > button.MuiButtonBase-root': {
      minHeight: '52.5px',
      '& > span.MuiSpeedDialIcon-root': {
        minHeight: '35px',
      },
    },
  },
  '& .MuiSpeedDialAction-staticTooltipLabel': {
    borderRadius: '5px',
    fontSize: '1.2rem',
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '1.6rem',
    },
  },
  '& svg.MuiSvgIcon-root': {
    width: '.9em',
    height: '.9em',
  },
}));
