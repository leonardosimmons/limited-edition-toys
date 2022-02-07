import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const CheckoutDisplayWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '65%',
  ...theme.custom.centerColumn
}));

export const CheckoutDisplayOrder = styled(Container)<ContainerProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex'
}));

export const CheckoutDisplayHeading = styled(Typography)<TypographyProps>(({ theme }) => ({
  width: '100%',
  alignSelf: 'flex-start',
  padding: '1rem 1rem .75rem ',
  fontSize: '2.25rem',
  fontWeight: 300,
  borderBottom: `3px solid ${theme.palette.grey[200]}`,
}));