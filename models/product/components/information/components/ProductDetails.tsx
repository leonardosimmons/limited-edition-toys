import React from 'react';
import { useAppSelector } from 'src/redux';
import { productSelector } from '../../../selectors';

import { ProductDetailSection } from '../styles/DetailSection';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductStarRating from '../../ProductStarRating';

type Props = {
  slug: string;
};

const ProductDetails: React.FunctionComponent<Props> = ({
  slug,
}): JSX.Element => {
  const product = useAppSelector(productSelector);

  return (
    <ProductDetailSection item container direction="column">
      <Grid item>
        <Typography variant="h2">{product.current.name}</Typography>
      </Grid>
      <Grid item>
        <ProductStarRating name={slug} rating={0} reviews={0} />
      </Grid>
      <Grid item>
        <Typography component="span">
          {`$${product.current.price_excluding_tax}.00`}
        </Typography>
      </Grid>
    </ProductDetailSection>
  );
};

export default ProductDetails;
