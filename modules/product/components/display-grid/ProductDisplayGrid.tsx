import React from 'react';
import { ProductOrigin, VendProduct } from 'modules/product/types';

import { ProductGrid, ProductGridMainContainer } from './styles/ProductGrid';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductDisplayCard from '../display-card/ProductDisplayCard';
import { useShuffledProductList } from 'modules/product/hooks/useShuffledProductList';
import { WooCommerceProduct } from '../../../woocommerce/types';

type Props = {
  products: VendProduct[] | WooCommerceProduct[];
  type: ProductOrigin;
  title?: string;
};

const ProductDisplayGrid: React.FunctionComponent<Props> = ({
  products,
  title,
}): JSX.Element => {
  const shuffled = useShuffledProductList(products as VendProduct[], products as VendProduct[]);

  return (
    <ProductGridMainContainer maxWidth={false}>
      {title && products.length > 0 && (
        <Typography variant="h2">{title}</Typography>
      )}
      <ProductGrid container spacing={2}>
        {shuffled.list.map((product: VendProduct, index: number) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={products.length > 6 ? 3 : 4}
            lg={3}>
            <ProductDisplayCard type={'vend'} product={product}/>
          </Grid>
        ))}
      </ProductGrid>
    </ProductGridMainContainer>
  );
};

export default ProductDisplayGrid;
