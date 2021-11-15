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

export const BillingDetailsInputGrid = styled(Grid)<GridProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& > div.MuiGrid-item': {
    width: '100%',
    margin: '8.5px 0',
  },
}));

export const BillingInputBox = styled(FormControl)<FormControlProps>(
  ({ theme }) => ({
    width: '100%',
    '& label.MuiFormLabel-root': {
      fontSize: '1rem',
      marginBottom: '20px',
    },
    '& div.MuiInputBase-root': {
      fontSize: '1rem',
      padding: '5px 5px',
    },
  }),
);
