import React from 'react';
import { Product } from 'models/product/types';

import { ProductGrid, ProductGridMainContainer } from './styles/ProductGrid';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductDisplayCard from '../display-card/ProductDisplayCard';
import { useShuffledProductList } from 'models/product/hooks/useShuffledProductList';

type Props = {
  products: Product[];
  title?: string;
};

const ProductDisplayGrid: React.FunctionComponent<Props> = ({
  products,
  title,
}): JSX.Element => {
  const shuffled = useShuffledProductList(products, products);

  return (
    <ProductGridMainContainer maxWidth={false}>
      {title && products.length > 0 && (
        <Typography variant="h2">{title}</Typography>
      )}
      <ProductGrid container spacing={2}>
        {shuffled.list.map((product: Product, index: number) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={products.length > 6 ? 3 : 4}
            lg={3}>
            <ProductDisplayCard product={product} />
          </Grid>
        ))}
      </ProductGrid>
    </ProductGridMainContainer>
  );
};

export default ProductDisplayGrid;
