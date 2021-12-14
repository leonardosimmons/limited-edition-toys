import React from 'react';
import Link from 'next/link';
import { Default } from 'utils/keys';
import { Promotion } from 'modules/promotions/types';

import { ProductDisplayInfoGrid } from '../styles/ProductDisplayInfoGrid';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductStarRating from '../../ProductStarRating';

type Props = {
  name: string;
  rating: number;
  slug: string;
  inStock: boolean | undefined;
  promotion?: Promotion;
};

const ProductDisplayInfo: React.FunctionComponent<Props> = ({
  inStock,
  name,
  slug,
  rating,
  promotion,
}): JSX.Element => {
  return (
    <ProductDisplayInfoGrid item container direction="column">
      <Grid item>
        <Link href={`/products/single/${slug}`}>
          <Typography variant="h6" sx={{ letterSpacing: 1.2 }}>
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
        {promotion ? (
          <Typography
            variant="caption"
            style={{ color: 'red', fontSize: '1.1rem', marginLeft: '15px' }}>
            {promotion.name}
          </Typography>
        ) : (
          ''
        )}
      </Grid>
      <Grid item container>
        <ProductStarRating name={slug} rating={0} reviews={0} />
      </Grid>
    </ProductDisplayInfoGrid>
  );
};

export default ProductDisplayInfo;
