import React from 'react';
import { useAppSelector } from 'src/redux';
import { PromotionDiscount } from 'modules/promotions/types';

import { productSelector } from '../../../selectors';

import { ProductDetailSection } from '../styles/DetailSection';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductStarRating from '../../ProductStarRating';

type Props = {
  slug: string;
  discount?: PromotionDiscount;
};

const ProductDetails: React.FunctionComponent<Props> = ({
  slug,
  discount,
}): JSX.Element => {
  const product = useAppSelector(productSelector);

  return (
    <ProductDetailSection
      item
      container
      discounted={discount ? true : false}
      direction="column">
      <Grid item>
        <Typography variant="h2">{product.current.name}</Typography>
      </Grid>
      <Grid item>
        <ProductStarRating name={slug} rating={0} reviews={0} />
      </Grid>
      {discount && discount.promotion ? (
        discount!.price === product.current.price_excluding_tax ? (
          <Grid item>
            <Typography component="caption" className="alt-caption">
              {discount!.promotion.name}
            </Typography>
            <Typography component="span">
              {`$${product.current.price_excluding_tax}.00`}
            </Typography>
          </Grid>
        ) : (
          <Grid item>
            <Typography component="caption">
              {discount!.promotion.name}
            </Typography>
            <Box>
              <Typography component="span">
                {`$${product.current.price_excluding_tax}.00`}
              </Typography>
              <Typography component="span">
                {discount!.price.toString().includes('.')
                  ? `$${discount!.price}0`
                  : `$${discount!.price}.00`}
              </Typography>
            </Box>
          </Grid>
        )
      ) : (
        <Grid item>
          <Typography component="span">
            {`$${product.current.price_excluding_tax}.00`}
          </Typography>
        </Grid>
      )}
    </ProductDetailSection>
  );
};

export default ProductDetails;
