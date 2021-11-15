import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';

export const BillingMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    maxWidth: '1200px',
    width: '100%',
    ...theme.custom.centerColumn,
  }),
);

export const BillingDetailsSection = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    ...theme.custom.centerColumn,
  }),
);

export const BillingSummarySection = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.grey[400],
  }),
);
