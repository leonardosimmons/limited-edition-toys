import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { productSelector } from '../../../selectors';
import { minusProductQuantity, plusProductQuantity } from '../../../actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  ProductActionMainGrid,
  ProductAmountButton,
} from '../styles/ActionSection';

type Props = {};

const ProductAction: React.FunctionComponent<Props> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productSelector);

  //* -------------------------------------------------
  // Handlers

  function handleAddToCart(): void {
    console.log('Product added to cart', product.current);
  }

  function handleAddAmount(): void {
    dispatch(plusProductQuantity());
  }

  function handleSubtractAmount(): void {
    dispatch(minusProductQuantity());
  }

  //* -------------------------------------------------
  // Render

  return (
    <ProductActionMainGrid item container>
      <Grid item container direction="column">
        <Grid item>
          <Typography
            variant="caption"
            color={product.inventory.inStock ? 'green' : 'red'}>
            {product.inventory.inStock
              ? product.inventory.level <= 10
                ? `${product.inventory.level} in stock`
                : '10+ in stock'
              : '0 in stock'}
          </Typography>
        </Grid>
        <Grid item>
          <ProductAmountButton
            variant="outlined"
            color="primary"
            onClick={handleSubtractAmount}>
            {'-'}
          </ProductAmountButton>
          <Typography variant="caption">
            {product.inventory.inStock ? product.quantity : 0}
          </Typography>
          <ProductAmountButton variant="outlined" onClick={handleAddAmount}>
            {'+'}
          </ProductAmountButton>
        </Grid>
      </Grid>
      <Grid item>
        <Box>
          <div id="product-action-button-spacer" />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddToCart}
            disabled={!product.inventory.inStock}>
            {'Add To Cart'}
          </Button>
        </Box>
      </Grid>
    </ProductActionMainGrid>
  );
};

export default ProductAction;
