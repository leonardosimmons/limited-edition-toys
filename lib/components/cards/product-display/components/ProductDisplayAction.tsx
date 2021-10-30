import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useProductDisplayCardStyles } from '../ProductDisplayCardStyles';

type Props = {
  inStock: boolean;
  price: number;
};

const ProductDisplayAction: React.FunctionComponent<Props> = ({
  inStock,
  price,
}): JSX.Element => {
  const styles = useProductDisplayCardStyles();

  return (
    <Grid container direction="row" className={styles.displayAction}>
      <Grid item>{`$${price}.00`}</Grid>
      <Grid item>
        <Button disabled={(!inStock && true) || false}>Add To Cart</Button>
      </Grid>
    </Grid>
  );
};

export default ProductDisplayAction;
