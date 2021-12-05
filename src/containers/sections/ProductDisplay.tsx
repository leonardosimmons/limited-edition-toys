import React from 'react';
import { Product } from 'modules/product/types';

import {
  SectionBannerBox,
  SectionDivider,
  SectionTitle,
  SectionWrapper,
} from './styles/Section';

import Image from 'next/image';
import ProductDisplayGrid from 'modules/product/components/display-grid/ProductDisplayGrid';

type Props = {
  products: Product[];
  title: string;
  src?: string;
};

const ProductDisplay: React.FunctionComponent<Props> = ({
  products,
  title,
  src,
}): JSX.Element => {
  return (
    <SectionWrapper maxWidth={false}>
      {src ? (
        <SectionBannerBox>
          <Image src={src} alt={'Product Display'} layout={'fill'} />
        </SectionBannerBox>
      ) : (
        <React.Fragment>
          <SectionTitle variant="h2">{title}</SectionTitle>
          <SectionDivider primary variant="middle" />
        </React.Fragment>
      )}
      <ProductDisplayGrid products={products} />
    </SectionWrapper>
  );
};

export default ProductDisplay;
