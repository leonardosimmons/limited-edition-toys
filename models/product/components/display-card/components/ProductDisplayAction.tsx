import React from 'react';

import { ProductDisplayActionGrid } from '../styles/ProductDisplayActionGrid';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type Props = {
  inStock: boolean;
  price: number;
  addToCart: () => void;
};

const ProductDisplayAction: React.FunctionComponent<Props> = ({
  inStock,
  price,
  addToCart,
}): JSX.Element => {
  return (
    <ProductDisplayActionGrid container direction="row">
      <Grid item>{`$${price}.00`}</Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          disabled={(!inStock && true) || false}
          onClick={addToCart}>
          Add To Cart
        </Button>
      </Grid>
    </ProductDisplayActionGrid>
  );
};

export default ProductDisplayAction;
