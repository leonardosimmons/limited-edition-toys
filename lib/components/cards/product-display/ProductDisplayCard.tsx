import React from 'react';
import { Product } from 'models/product/types';

import { useProductDisplayCardStyles } from './ProductDisplayCardStyles';

import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import ProductDisplayInfo from './components/ProductDisplayInfo';
import ProductDisplayAction from './components/ProductDisplayAction';

type Props = {
  product: Product;
};

const ProductDisplayCard: React.FunctionComponent<Props> = ({
  product,
}): JSX.Element => {
  const styles = useProductDisplayCardStyles();
  const [inStock, setInStock] = React.useState<boolean>(false);

  return (
    <Paper className={styles.mainContainer}>
      {product ? (
        <Grid container direction="column" spacing={1}>
          <Grid item className={styles.gridItem}>
            <Box className={styles.imageBox}>
              <Image
                src={product.image_url as string}
                alt="product image"
                layout="fill"
                objectFit="contain"
                className={styles.image}
              />
            </Box>
          </Grid>
          <ProductDisplayInfo name={product.name} rating={4} inStock={true} />
          <ProductDisplayAction price={product.price_excluding_tax as number} />
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
