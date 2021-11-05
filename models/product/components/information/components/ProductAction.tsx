import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { productSelector } from '../../../selectors';
import { minusProductQuantity, plusProductQuantity } from '../../../actions';

import Grid from '@mui/material/Grid';
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
    <ProductActionMainGrid item container spacing={4}>
      <Grid item>
        <ProductAmountButton
          variant="outlined"
          color="primary"
          onClick={handleSubtractAmount}>
          {'-'}
        </ProductAmountButton>
        <Typography variant="caption">{product.quantity}</Typography>
        <ProductAmountButton variant="outlined" onClick={handleAddAmount}>
          {'+'}
        </ProductAmountButton>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddToCart}
          disabled={!product.inventory.inStock}
          sx={{ fontSize: '1rem', borderRadius: '10px', letterSpacing: 1.2 }}>
          {product.inventory.inStock ? 'Add To Cart' : 'Out Of Stock'}
        </Button>
      </Grid>
    </ProductActionMainGrid>
  );
};

export default ProductAction;
