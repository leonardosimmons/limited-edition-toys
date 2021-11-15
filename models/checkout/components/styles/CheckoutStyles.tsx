import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
import FormControl, { FormControlProps } from '@mui/material/FormControl';

export const CheckoutInputMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& > div.MuiGrid-item': {
    width: '100%',
    margin: '8.5px 0',
  },
}));

export const CheckoutInputBox = styled(FormControl)<FormControlProps>(
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
