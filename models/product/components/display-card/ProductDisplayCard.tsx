import React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from 'src/redux';
import {
  Product,
  ProductCartToken,
  ProductInventory,
} from 'models/product/types';

import { useCart } from 'models/cart/hooks/useCart';
import { useGetInventoryById } from 'models/product/queries';
import { useSingleProduct } from 'models/product/hooks/useSingleProduct';

import { appSelector } from 'src/redux/selector';

import { ProductDisplayCardImageBox } from './styles/ProductDisplayImageBox';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import ProductDisplayInfo from './components/ProductDisplayInfo';
import ProductDisplayAction from './components/ProductDisplayAction';
import DisplayCard from '../../../../lib/components/cards/DisplayCard';

type Props = {
  product: Product;
  index?: number;
};

const ProductDisplayCard: React.FunctionComponent<Props> = ({
  product,
  index,
}): JSX.Element => {
  const cart = useCart();
  const router = useRouter();
  const ctx = useSingleProduct();
  const app = useAppSelector(appSelector);
  const [slug, setSlug] = React.useState<string | undefined>();
  const { status, data: inventory, error } = useGetInventoryById(product.id);

  // once populated set the url slug for the product
  React.useEffect(() => {
    if (product) {
      setSlug(
        product.name
          .toLowerCase()
          .replace(/[' '/]/g, '-')
          .replace(/[!:.;()""\[\]]/g, '')
          .replace(/(--|---|-+-)/g, '-'),
      );
    }
  }, [product]);

  //* -------------------------------------------------
  // Stock

  const [inStock, setInStock] = React.useState<boolean>(false);
  const [stockCount, setStockCount] = React.useState<number>(0);

  // checks if product is 'in stock'
  React.useEffect(() => {
    if (inventory) {
      let count: number = 0;
      inventory.forEach((item: ProductInventory) => {
        if (item.inventory_level > 0) {
          count = count + item.inventory_level;
          if (!inStock) {
            setInStock(true);
          }
        }
      });
      setStockCount(count);
    }
  }, [inventory]);

  //* -------------------------------------------------
  // Handlers

  function handleAddToCart(): void {
    const token: ProductCartToken = {
      product,
      quantity: 1,
      stock: stockCount,
      total: product.price_excluding_tax as number,
    };
    cart.add(token);
    router.push('/cart');
  }

  // redirects to product page
  function handleImageClicked(): void {
    ctx.reset();
    ctx.setSelection(product);
    router.push(`/products/single/${slug}`);
  }

  //* -------------------------------------------------
  // Render

  if (status === 'loading') {
    return (
      <DisplayCard>
        <CircularProgress color={'secondary'} />
      </DisplayCard>
    );
  }

  return (
    <DisplayCard>
      <Grid container direction="column" spacing={1}>
        <Grid item sx={{ padding: 0 }}>
          <ProductDisplayCardImageBox>
            <Image
              priority={
                app.ui.status.viewport === 'desktop' && index && index < 8
                  ? true
                  : app.ui.status.viewport === 'tablet' && index && index < 6
                  ? true
                  : app.ui.status.viewport === 'mobile' && index && index < 2
                  ? true
                  : false
              }
              src={product.image_url as string}
              alt="product image"
              layout="fill"
              objectFit="contain"
              onClick={handleImageClicked}
            />
          </ProductDisplayCardImageBox>
        </Grid>
        <ProductDisplayInfo
          name={product.name}
          rating={0}
          slug={slug as string}
          inStock={inStock}
        />
        <ProductDisplayAction
          inStock={inStock}
          price={product.price_excluding_tax as number}
          addToCart={handleAddToCart}
        />
      </Grid>
    </DisplayCard>
  );
};

export default ProductDisplayCard;
