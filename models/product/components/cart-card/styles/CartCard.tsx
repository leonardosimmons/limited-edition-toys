import { styled } from '@mui/material/styles';

import Paper, { PaperProps } from '@mui/material/Paper';
import Grid, { GridProps } from '@mui/material/Grid';

export const CartCard = styled(Paper)<PaperProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  ...theme.custom?.centerColumn,
  margin: '10px 0 20px',
  '&.MuiPaper-root': {
    border: '1px solid rgba(189,189, 189, 0.4)',
    ...theme.custom?.shadow.card.cart,
  },
  [theme.breakpoints.up('tabletSm')]: {},
  [theme.breakpoints.up('desktopSm')]: {
    padding: '5px',
  },
}));

export const CartCardMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  '& > div.MuiGrid-item': {
    width: '100%',
  },
}));
