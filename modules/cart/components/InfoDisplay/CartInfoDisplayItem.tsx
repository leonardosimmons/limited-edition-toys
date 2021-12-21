import React from 'react';

import { SummaryInfoDisplayGridItem } from '../summary/styles/SummarySection';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  value: number;
  bold?: boolean;
  hasPromo?: boolean;
};

const CartInfoDisplayItem: React.FunctionComponent<Props> = ({
  title,
  value,
  bold,
  hasPromo,
}): JSX.Element => {
  return (
    <SummaryInfoDisplayGridItem item container bold={bold}>
      <Grid item xs={6}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={6}>
        {hasPromo ? (
          <React.Fragment>
            <Typography
              variant="body1"
              sx={{
                marginRight: '15px',
                color: 'red',
              }}>{`-40%  $${(value * 0.6).toFixed(2)}`}</Typography>
            <Typography
              variant="body1"
              sx={{ textDecoration: 'line-through' }}>{`$${value.toFixed(
              2,
            )}`}</Typography>
          </React.Fragment>
        ) : (
          <Typography variant="body1">{`$${value.toFixed(2)}`}</Typography>
        )}
      </Grid>
    </SummaryInfoDisplayGridItem>
  );
};

export default CartInfoDisplayItem;
