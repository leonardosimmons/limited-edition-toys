import React from 'react';
import { Product } from 'models/product/types';

import { ProductGrid, ProductGridMainContainer } from './styles/ProductGrid';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductDisplayCard from '../display-card/ProductDisplayCard';

type Props = {
  products: Product[];
  title?: string;
};

const ProductDisplayGrid: React.FunctionComponent<Props> = ({
  products,
  title,
}): JSX.Element => {
  return (
    <ProductGridMainContainer maxWidth={false}>
      {title && <Typography variant="h2">{title}</Typography>}
      <ProductGrid container spacing={2}>
        {products.map((product: Product, index: number) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={products.length > 6 ? 3 : 4}>
            <ProductDisplayCard product={product} />
          </Grid>
        ))}
      </ProductGrid>
    </ProductGridMainContainer>
  );
};

export default ProductDisplayGrid;
