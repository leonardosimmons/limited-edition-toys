import React from 'react';
import { Promotion } from 'modules/promotions/types';

import { ProductDisplayActionGrid } from '../styles/ProductDisplayActionGrid';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type Props = {
  inStock: boolean;
  price: number;
  addToCart: () => void;
  promotions?: Promotion[];
};

const ProductDisplayAction: React.FunctionComponent<Props> = ({
  inStock,
  price,
  addToCart,
  promotions,
}): JSX.Element => {
  const [discountPrice, setDiscountPrice] = React.useState<number>(0);

  React.useEffect(() => {
    if (promotions) {
      console.log(price * promotions[0].action.value);
      switch (promotions[0].action.type) {
        case 'percent_pool_discount':
          setDiscountPrice(price - price * promotions[0].action.value);
          break;
        default:
          setDiscountPrice(price);
          break;
      }
    }
  }, [promotions]);

  return (
    <ProductDisplayActionGrid
      container
      direction="row"
      discounted={promotions ? true : false}>
      {promotions ? (
        discountPrice === price ? (
          <Grid item>{`$${price}.00`}</Grid>
        ) : (
          <Grid item>
            <span>{`$${price}.00`}</span>
            <span>
              {discountPrice.toString().includes('.')
                ? `$${discountPrice}0`
                : `$${discountPrice}.00`}
            </span>
          </Grid>
        )
      ) : (
        <Grid item>{`$${price}.00`}</Grid>
      )}
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          disabled={(!inStock && true) || false}
          onClick={addToCart}>
          Add To Cart
        </Button>
      </Grid>
    </ProductDisplayActionGrid>
  );
};

export default ProductDisplayAction;
