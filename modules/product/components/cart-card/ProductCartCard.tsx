import React from 'react';
import { fixSlug } from '../../../../lib/functions';
import { ProductCartToken, ProductInventory } from 'modules/product/types';
import { useRouter } from 'next/router';

import { useCart } from 'modules/cart/hooks/useCart';
import { useGetInventoryById } from 'modules/product/queries';
import { useCartSession } from 'modules/cart/hooks/useCartSession';

import { CartCard, CartCardMainGrid } from './styles/CartCard';
import { CartCardHeading, CartCardImageBox } from './styles/CartCardHeading';
import { CartCardInfo } from './styles/CartCardInfo';
import { CartCardAction } from './styles/CartCardAction';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SelectChangeEvent } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import QuantitySelect from 'lib/components/select/QuantitySelect';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

type Props = {
  token: ProductCartToken;
};

const ProductCartCard: React.FunctionComponent<Props> = ({
  token,
}): JSX.Element => {
  const cart = useCart();
  const router = useRouter();
  const {
    status,
    data: inventory,
    error,
  } = useGetInventoryById(token.product.id);
  const session = useCartSession();

  //* -------------------------------------------------
  // Stock

  const [stock, setStock] = React.useState<number>(0);

  React.useEffect(() => {
    if (inventory) {
      let count: number = 0;
      inventory?.forEach((item: ProductInventory) => {
        count = count + item.inventory_level;
      });
      setStock(count);
    }
  }, [inventory]);

  //* -------------------------------------------------
  // Total

  React.useEffect(() => {
    cart.updateTotal(token.product.id);
  }, [cart.items]);

  //* -------------------------------------------------
  // Handlers

  function handleViewDetails(): void {
    const slug: string = fixSlug(token.product.name);
    router.push(`/products/single/${slug}`);
  }

  async function handleQuantityChange(e: SelectChangeEvent): Promise<void> {
    try {
      await session.updateQuantity(
        token.product.id,
        cart.items,
        undefined,
        parseInt(e.target.value),
      );
      cart.updateQuantity(token.product.id, parseInt(e.target.value));
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async function handleProductRemoval(): Promise<void> {
    try {
      await session.remove(token.product.sku);
      cart.remove(token.product.id);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  //* -------------------------------------------------
  // Render

  return (
    <CartCard>
      <CartCardMainGrid container>
        <Grid item>
          <CartCardHeading>
            <CartCardImageBox>
              <Image
                src={token.product.image_url as string}
                alt="product image"
                layout="fill"
                objectFit="contain"
              />
            </CartCardImageBox>
            <Typography variant="h2">{token.product.name}</Typography>
          </CartCardHeading>
        </Grid>
        <Grid item>
          <CartCardInfo
            discounted={
              token.discount &&
              token.discount.price !== token.product.price_excluding_tax
                ? true
                : false
            }
            showPromoName={
              token.discount &&
              token.discount.price === token.product.price_excluding_tax
                ? true
                : false
            }>
            {status === 'loading' ? (
              <CircularProgress />
            ) : (
              <QuantitySelect
                value={token.quantity}
                stock={stock}
                onChange={handleQuantityChange}
              />
            )}
            <div className="cartInfo-priceBox">
              {token.discount ? (
                token.discount.price === token.product.price_excluding_tax ? (
                  <React.Fragment>
                    <span>{`${token.discount.promotion.name}`}</span>
                    <span>{`$${token.total.toFixed(2)}`}</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span>{`$${token.total.toFixed(2)}`}</span>
                    <span>{`$${(
                      token.product.price_excluding_tax! * token.quantity
                    ).toFixed(2)}`}</span>
                  </React.Fragment>
                )
              ) : (
                <span>{`$${token.total.toFixed(2)}`}</span>
              )}
            </div>
          </CartCardInfo>
        </Grid>
        <Grid item>
          <CartCardAction>
            <Button
              startIcon={<VisibilityOutlinedIcon />}
              onClick={handleViewDetails}>
              {'View Details'}
            </Button>
            <Button
              startIcon={<CancelOutlinedIcon />}
              onClick={handleProductRemoval}>
              {'Remove'}
            </Button>
          </CartCardAction>
        </Grid>
      </CartCardMainGrid>
    </CartCard>
  );
};

export default ProductCartCard;
