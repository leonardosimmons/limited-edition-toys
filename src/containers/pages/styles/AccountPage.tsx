import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';

export const AccountMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: '800px',
    padding: '4rem 0',
    ...theme.custom.centerColumn,
    [theme.breakpoints.up('desktopMd')]: {
      minHeight: '1000px'
    }
  }),
);

export const AccountHeader = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& > h1.MuiTypography-h1': {
    textAlign: 'center',
    fontSize: '4rem',
    fontWeight: 'bold',
    fontFamily: 'Jost',
    color: theme.palette.secondary.main,
    paintOrder: 'stroke fill',
    textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('mobileMd')]: {
      fontSize: '2r.5rem',
    },
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '6rem',
      textShadow: `4px 4px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '8rem',
    },
  },
}));
