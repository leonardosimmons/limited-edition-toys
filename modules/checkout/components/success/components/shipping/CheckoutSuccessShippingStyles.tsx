import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const CheckoutShippingWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flex: '0 1 35%',
  padding: '2rem 0',
  borderBottom: `1.5px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.up('tabletSm')]: {
    borderBottom: '0'
  },
  [theme.breakpoints.up('tabletLg')]: {
    flex: '0 1 30%'
  },
}));

export const CheckoutShippingHeading = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '1rem',
  [theme.breakpoints.up('tabletSm')]: {
    textAlign: 'left',
    fontSize: '1.2rem',
    paddingBottom: '0.5rem'
  },
  [theme.breakpoints.up('desktopMd')]: {
    fontSize: '1.6rem'
  },
}));

export const CheckoutShippingAddress = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.2rem',
  textAlign: 'center',
  [theme.breakpoints.up('tabletSm')]: {
    textAlign: 'left',
    fontSize: '1rem'
  },
  [theme.breakpoints.up('desktopMd')]: {
    fontSize: '1.2rem'
  },
}));