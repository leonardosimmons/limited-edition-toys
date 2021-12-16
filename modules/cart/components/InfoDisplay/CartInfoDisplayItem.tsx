import React from 'react';

import { SummaryInfoDisplayGridItem } from '../summary/styles/SummarySection';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  value: number;
  bold?: boolean;
};

const CartInfoDisplayItem: React.FunctionComponent<Props> = ({
  title,
  value,
  bold,
}): JSX.Element => {
  return (
    <SummaryInfoDisplayGridItem item container bold={bold}>
      <Grid item xs={6}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{`$${value.toFixed(2)}`}</Typography>
      </Grid>
    </SummaryInfoDisplayGridItem>
  );
};

export default CartInfoDisplayItem;
