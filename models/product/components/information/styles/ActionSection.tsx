import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
import Button, { ButtonProps } from '@mui/material/Button';

export const ProductActionMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  ...theme.custom.center,
  marginBottom: '40px',
}));

export const ProductAmountButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: 0,
  margin: '0 1rem',
  padding: '3px 15px',
  fontSize: '1.2rem',
  '&:active': {
    ...theme.custom.actions.clicked,
  },
  '&:nth-of-type(1)': {
    marginLeft: 0,
  },
  '&:nth-of-type(2)': {
    marginRight: 0,
  },
}));
