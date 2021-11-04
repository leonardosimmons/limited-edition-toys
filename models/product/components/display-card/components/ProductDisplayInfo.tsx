import React from 'react';
import Link from 'next/link';
import { Default } from 'utils/keys';

import { ProductDisplayInfoGrid } from '../styles/ProductDisplayInfoGrid';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductStarRating from '../../star-rating/ProductStarRating';

type Props = {
  name: string;
  rating: number;
  slug: string;
  inStock: boolean | undefined;
};

const ProductDisplayInfo: React.FunctionComponent<Props> = ({
  inStock,
  name,
  slug,
  rating,
}): JSX.Element => {
  return (
    <ProductDisplayInfoGrid item container direction="column">
      <Grid item>
        <Link href={`/product/${slug}`}>
          <Typography variant="h6">
            {name.length > Default.MAX_PRODUCT_NAME_LENGTH
              ? `${name.slice(0, Default.MAX_PRODUCT_NAME_LENGTH)}...`
              : name}
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Typography
          variant="caption"
          style={{ color: inStock ? 'green' : 'red' }}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </Grid>
      <Grid item container>
        <ProductStarRating name={slug} rating={0} reviews={0} />
      </Grid>
    </ProductDisplayInfoGrid>
  );
};

export default ProductDisplayInfo;
