import React from 'react';
import { useRouter } from 'next/router';

import { useCart } from 'modules/cart/hooks/useCart';
import { CartSessionToken } from 'modules/cart/types';
import { ProductCartToken } from 'modules/product/types';
import { PromotionDiscount } from 'modules/promotions/types';
import { useSingleProduct } from 'modules/product/hooks/useSingleProduct';
import { useCartSession } from 'modules/cart/hooks/useCartSession';

import {
  ProductActionMainGrid,
  ProductAmountButton,
} from '../styles/ActionSection';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  discount?: PromotionDiscount;
};

const ProductAction: React.FunctionComponent<Props> = ({
  discount,
}): JSX.Element => {
  const cart = useCart();
  const router = useRouter();
  const ctx = useSingleProduct();
  const session = useCartSession();

  //* -------------------------------------------------
  // Handlers

  async function handleAddToCart(): Promise<void> {
    const token: ProductCartToken = {
      product: ctx.current,
      quantity: ctx.quantity,
      stock: ctx.inventory.level,
      total: (ctx.current.price_excluding_tax as number) * ctx.quantity,
      discount,
    };
    const sessionToken: CartSessionToken = {
      sku: ctx.current.sku,
      quantity: ctx.quantity,
      stock: ctx.inventory.level,
      discountId: (discount && discount.promotion?.id) || undefined,
    };
    cart.add(token);
    await session.add(sessionToken);
    router.push('/cart');
  }

  function handleAddAmount(): void {
    ctx.plusQuantity();
  }

  function handleSubtractAmount(): void {
    ctx.minusQuantity();
  }

  //* -------------------------------------------------
  // Render

  return (
    <ProductActionMainGrid item container>
      <Grid item container direction="column">
        <Grid item>
          <Typography
            variant="caption"
            color={ctx.inventory.inStock ? 'green' : 'red'}>
            {ctx.inventory.inStock
              ? ctx.inventory.level <= 10
                ? `${ctx.inventory.level} in stock`
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
            {ctx.inventory.inStock ? ctx.quantity : 0}
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
            disabled={!ctx.inventory.inStock}>
            {'Add To Cart'}
          </Button>
        </Box>
      </Grid>
    </ProductActionMainGrid>
  );
};

export default ProductAction;
