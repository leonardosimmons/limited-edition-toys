import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const CheckoutShippingWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flex: '0 1 30%',
  padding: '2rem 0'
}));

export const CheckoutShippingHeading = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 'bold'
}));

export const CheckoutShippingAddress = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.2rem'
}));