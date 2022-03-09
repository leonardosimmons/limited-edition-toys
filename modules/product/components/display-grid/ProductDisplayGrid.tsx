import React from 'react';
import { WooCommerceProduct } from '../../../woocommerce/types';
import { ProductOrigin, VendProduct } from 'modules/product/types';

import { ProductGrid, ProductGridMainContainer } from './styles/ProductGrid';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductDisplayCard from '../display-card/ProductDisplayCard';

type Props = {
  products: VendProduct[] | WooCommerceProduct[];
  type: ProductOrigin;
  title?: string;
};

const ProductDisplayGrid: React.FunctionComponent<Props> = ({
  products,
  type,
  title,
}): JSX.Element => {
  return (
    <ProductGridMainContainer maxWidth={false}>
      {title && products.length > 0 && (
        <Typography variant="h2">{title}</Typography>
      )}
      <ProductGrid container spacing={2}>
        {products.map((product: VendProduct | WooCommerceProduct, index: number) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={products.length > 6 ? 3 : 4}
            lg={3}>
            <ProductDisplayCard type={type} product={product}/>
          </Grid>
        ))}
      </ProductGrid>
    </ProductGridMainContainer>
  );
};

export default ProductDisplayGrid;
