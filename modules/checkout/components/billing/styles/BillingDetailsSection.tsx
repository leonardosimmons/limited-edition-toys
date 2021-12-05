import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
import Container, { ContainerProps } from '@mui/material/Container';
import FormControl, { FormControlProps } from '@mui/material/FormControl';

export const BillingDetailsMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    ...theme.custom.centerColumn,
    padding: '20px 0',
    margin: '2rem 0',
    '& h2.MuiTypography-h2': {
      margin: '20px 0 20px',
      fontSize: '1.8rem',
      fontWeight: 'bold',
    },
  }),
);
