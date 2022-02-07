import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const CheckoutDisplayWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '95%',
  ...theme.custom.centerColumn,
  [theme.breakpoints.up('desktopSm')]: {
    width: '85%',
  },
}));

export const CheckoutDisplayOrder = styled(Container)<ContainerProps>(({ theme }) => ({
  maxWidth: '1600px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('mobileMd')]: {
    width: '90%'
  },
  [theme.breakpoints.up('tabletSm')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.up('desktopSm')]: {
    width: '100%',
  },
}));

export const CheckoutDisplayHeading = styled(Typography)<TypographyProps>(({ theme }) => ({
  maxWidth: '1600px',
  width: '100%',
  padding: '1rem 0',
  fontSize: '1rem',
  fontWeight: 300,
  textAlign: 'center',
  borderBottom: `3px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.up('mobileMd')]: {
    width: '90%'
  },
  [theme.breakpoints.up('tabletSm')]: {
    textAlign: 'left',
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('tabletLg')]: {
    marginBottom: '.5rem',
    padding: '1rem 1rem .75rem',
  },
  [theme.breakpoints.up('desktopSm')]: {
    width: '100%',
    fontSize: '1.75rem',
  },
  [theme.breakpoints.up('desktopLg')]: {
    fontSize: '2rem',
  },
}));