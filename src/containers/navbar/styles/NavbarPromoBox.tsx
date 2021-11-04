import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const NavbarPromoBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'none',
  position: 'relative',
  flex: '0 1 20%',
  minHeight: '100px',
  transform: 'scale(.8)',
  [theme.breakpoints.up('mobileLg')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.up('tabletLg')]: {
    marginRight: 'auto',
    transform: 'scale(1)',
  },
  [theme.breakpoints.up('desktopSm')]: {
    flex: '0 1 30%',
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.up('desktopMd')]: {
    flex: '0 1 25%',
    transform: 'scale(1.2)',
  },
  [theme.breakpoints.up('desktopMd')]: {
    marginLeft: '1rem',
  },
}));
