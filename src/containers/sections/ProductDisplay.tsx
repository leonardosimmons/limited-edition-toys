import React from 'react';
import { ProductOrigin, VendProduct } from 'modules/product/types';

import {
  SectionBannerBox,
  SectionDivider,
  SectionTitle,
  SectionWrapper,
} from './styles/Section';

import Image from 'next/image';
import ProductDisplayGrid from 'modules/product/components/display-grid/ProductDisplayGrid';
import { WooCommerceProduct } from '../../../modules/woocommerce/types';

type Props = {
  products: VendProduct[] | WooCommerceProduct[];
  title: string;
  type: ProductOrigin;
  src?: string;
};

const ProductDisplay: React.FunctionComponent<Props> = ({
  products,
  title,
  type,
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
      <ProductDisplayGrid type={type} products={products} />
    </SectionWrapper>
  );
};

export default ProductDisplay;
