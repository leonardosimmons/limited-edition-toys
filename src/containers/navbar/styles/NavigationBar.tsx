import { Color } from 'utils/keys';

import { styled } from '@mui/material/styles';

import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Button, { ButtonProps } from '@mui/material/Button';

export const NavigationBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '.35rem .35rem',
  backgroundColor: Color.NAVBAR_BACKGROUND,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.up('desktopSm')]: {
    padding: '0 1.5rem',
  },
}));

export const NavbarButton = styled(Button)<ButtonProps>(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.up('mobileLg')]: {
    justifyContent: 'center',
  },
}));

export const NavbarOffset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
