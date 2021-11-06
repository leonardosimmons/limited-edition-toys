import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const NavbarTitleBox = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& > button.MuiButton-root:hover': {
    backgroundColor: 'transparent',
  },
}));

export const NavBarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 'auto',
  color: theme.palette.secondary.main,
  paintOrder: 'stroke fill',
  textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
  [theme.breakpoints.up('mobileMd')]: {
    marginRight: 0,
  },
  [theme.breakpoints.up('tabletSm')]: {
    textShadow: `4px 4px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
  },
  [theme.breakpoints.up('tabletLg')]: {
    //flexDirection: 'column',
  },
  '& span:nth-of-type(1)': {
    marginRight: '5px',
    fontFamily: 'Jost, sans-serif',
    fontSize: '1.1rem',
    fontWeight: 700,
    [theme.breakpoints.up('mobileMd')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('tabletSm')]: {
      marginRight: '7px',
      fontSize: '2.35rem',
    },
    [theme.breakpoints.up('tabletMd')]: {
      fontSize: '2.15rem',
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '2.5rem',
      marginRight: '15px',
    },
    [theme.breakpoints.up('desktopSm')]: {
      fontSize: '2.25rem',
    },
    [theme.breakpoints.up('desktopMd')]: {
      fontSize: '3rem',
    },
  },
  '& span:nth-of-type(2)': {
    marginLeft: '5px',
    fontFamily: 'Pacifico, cursive',
    fontSize: '1.25rem',
    [theme.breakpoints.up('tabletSm')]: {
      marginLeft: '7px',
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '3rem',
      margin: 0,
    },
    [theme.breakpoints.up('desktopSm')]: {
      fontSize: '2.75rem',
    },
    [theme.breakpoints.up('desktopMd')]: {
      fontSize: '3.5rem',
    },
  },
}));
