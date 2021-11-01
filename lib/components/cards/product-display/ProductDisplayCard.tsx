import React from 'react';
import { Product } from 'models/product/types';

import { useProductDisplayCardStyles } from './ProductDisplayCardStyles';

import Image from 'next/image';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductDisplayInfo from './components/ProductDisplayInfo';
import ProductDisplayAction from './components/ProductDisplayAction';
import { useGetInventoryById } from 'models/product/queries';

type Props = {
  product: Product;
};

const ProductDisplayCard: React.FunctionComponent<Props> = ({
  product,
}): JSX.Element => {
  const styles = useProductDisplayCardStyles();
  const [slug, setSlug] = React.useState<string | undefined>();
  const { status, data: inventory, error } = useGetInventoryById(product.id);
  const [inStock, setInStock] = React.useState<boolean>(false);

  // checks if product is 'in stock'
  React.useEffect(() => {
    if (inventory && inventory[0].inventory_level > 0) {
      setInStock(true);
    }
  }, [inventory]);

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
  // Handlers

  return (
    <Paper className={styles.mainContainer}>
      {product ? (
        <Grid container direction="column" spacing={1}>
          <Grid item className={styles.gridItem}>
            <Box className={styles.imageBox}>
              <Link href={`/product/${slug}`}>
                <Image
                  src={product.image_url as string}
                  alt="product image"
                  layout="fill"
                  objectFit="contain"
                  className={styles.image}
                />
              </Link>
            </Box>
          </Grid>
          <ProductDisplayInfo
            name={product.name}
            rating={0}
            slug={slug as string}
            inStock={inStock}
          />
          <ProductDisplayAction
            price={product.price_excluding_tax as number}
            inStock={inStock}
          />
        </Grid>
      ) : (
        <React.Fragment>
          <CircularProgress color="secondary" />
          <div>Loading...</div>
        </React.Fragment>
      )}
    </Paper>
  );
};

export default ProductDisplayCard;
