import React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { Product } from 'models/product/types';
import { uiSelector } from 'src/redux/models/ui';

import { useGetInventoryById } from 'models/product/queries';

import { ProductDisplayCardImageBox } from './styles/ProductDisplayImageBox';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import ProductDisplayInfo from './components/ProductDisplayInfo';
import ProductDisplayAction from './components/ProductDisplayAction';
import DisplayCard from '../../../../lib/components/cards/DisplayCard';
import { setCurrentProductSelection } from 'models/product/actions';

type Props = {
  product: Product;
  index?: number;
};

const ProductDisplayCard: React.FunctionComponent<Props> = ({
  product,
  index,
}): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const ui = useAppSelector(uiSelector);
  const [slug, setSlug] = React.useState<string | undefined>();
  const { status, data: inventory, error } = useGetInventoryById(product.id);

  // once populated set the url slug for the product
  React.useEffect(() => {
    if (product && !slug) {
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

  // checks if product is 'in stock'
  React.useEffect(() => {
    if (inventory && inventory[0].inventory_level > 0) {
      setInStock(true);
    }
  }, [inventory]);

  //* -------------------------------------------------
  // Handlers

  function handleAddToCart(): void {
    // create ProductCartToken & add to cart
    console.log('Product added to cart', product);
  }

  // redirects to product page
  function handleImageClicked(): void {
    dispatch(setCurrentProductSelection(product));
    router.push(`/product/${slug}`);
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
                ui.status.viewport === 'desktop' && index && index < 8
                  ? true
                  : false || false
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
