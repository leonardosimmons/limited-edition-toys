import React from 'react';

import { SectionDivider, SectionTitle, SectionWrapper } from './styles/Section';
import ProductDisplayGrid from 'models/product/components/display-grid/ProductDisplayGrid';
import { Product } from 'models/product/types';

type Props = {
  products: Product[];
  title: string;
};

const ProductDisplay: React.FunctionComponent<Props> = ({
  products,
  title,
}): JSX.Element => {
  return (
    <SectionWrapper maxWidth={false}>
      <SectionTitle variant="h2">{title}</SectionTitle>
      <SectionDivider primary variant="middle" />
      <ProductDisplayGrid products={products} />
    </SectionWrapper>
  );
};

export default ProductDisplay;
