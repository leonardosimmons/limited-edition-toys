import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const AccountMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: '4rem 0',
    ...theme.custom.centerColumn,
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
