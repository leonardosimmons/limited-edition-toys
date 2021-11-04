import React from 'react';
import { ProductHeaderMainContainer } from './styles/ProductHeaderMainContainer';
import { ProductHeaderTitle } from './styles/ProductHeaderTitle';

type Props = {
  title: string;
};

const ProductHeader: React.FunctionComponent<Props> = ({
  title,
}): JSX.Element => {
  return (
    <ProductHeaderMainContainer maxWidth={false}>
      <ProductHeaderTitle variant="h2">{title}</ProductHeaderTitle>
    </ProductHeaderMainContainer>
  );
};

export default ProductHeader;
