import React from 'react';
import { Promotion } from 'modules/promotions/types';

import { usePromotions } from 'modules/promotions/hooks/usePromotions';

import { ProductDisplayActionGrid } from '../styles/ProductDisplayActionGrid';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type Props = {
  inStock: boolean;
  price: number;
  addToCart: () => void;
  promotion?: Promotion;
};

const ProductDisplayAction: React.FunctionComponent<Props> = ({
  inStock,
  price,
  addToCart,
  promotion,
}): JSX.Element => {
  const { calculateDiscountPrice } = usePromotions();
  const [discountPrice, setDiscountPrice] = React.useState<number>(0);

  React.useEffect(() => {
    if (promotion) {
      setDiscountPrice(calculateDiscountPrice(price, promotion));
    }
  }, [promotion]);

  return (
    <ProductDisplayActionGrid
      container
      direction="row"
      discounted={promotion ? true : false}>
      {promotion ? (
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
