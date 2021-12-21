import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';

export const BillingMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    maxWidth: '1500px',
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    marginBottom: '5rem',
    [theme.breakpoints.up('tabletLg')]: {
      flexDirection: 'row',
      marginBottom: '8rem',
    },
  }),
);

export const BillingDetailsSection = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    ...theme.custom.centerColumn,
    [theme.breakpoints.up('tabletSm')]: {
      flex: '0 1 50%',
    },
  }),
);

export const BillingSummarySection = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    ...theme.custom.centerColumn,
    alignSelf: 'flex-start',
    [theme.breakpoints.up('tabletSm')]: {
      flex: '0 1 50%',
    },
    '& table.MuiTable-root': {
      border: `2px solid ${theme.palette.grey[300]}`,
    },
    '& div.MuiContainer-root > div.MuiContainer-root': {
      border: `2px solid ${theme.palette.grey[300]}`,
      borderTop: 0,
      '& div.MuiBox-root': {
        marginBottom: 0,
      },
    },
  }),
);
