import React from 'react';
import { ProductCartToken, ProductInventory } from 'models/product/types';
import { useRouter } from 'next/router';

import { useCart } from 'models/cart/hooks/useCart';
import { useGetInventoryById } from 'models/product/queries';

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
    const slug: string = token.product.name
      .toLowerCase()
      .replace(/[' '/]/g, '-')
      .replace(/[!:.;()""\[\]]/g, '')
      .replace(/(--|---|-+-)/g, '-');
    router.push(`/products/single/${slug}`);
  }

  function handleQuantityChange(e: SelectChangeEvent): void {
    cart.updateQuantity(token.product.id, parseInt(e.target.value));
  }

  function handleProductRemoval(): void {
    cart.remove(token.product.id);
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
          <CartCardInfo>
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
              <span>{`$${token.total}.00`}</span>
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
