import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const NavbarMenuBox = styled(Box)<BoxProps>(({ theme }) => ({
  flex: '0 1 20%',
  height: '60px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& > hr.MuiDivider-root': {
    height: '60%',
    backgroundColor: theme.palette.grey[500],
    margin: 'auto 10px',
    [theme.breakpoints.up('desktopSm')]: {
      margin: 'auto 10px',
    },
    [theme.breakpoints.up('desktopLg')]: {
      margin: 'auto 20px',
    },
  },
  [theme.breakpoints.up('desktopSm')]: {
    flex: '0 1 30%',
  },
  [theme.breakpoints.up('desktopMd')]: {
    flex: '0 1 30%',
  },
}));
