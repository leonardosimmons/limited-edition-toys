import React from 'react';
import data from 'data/pages/cart.json';

import { PreviewHeading, PreviewTitle } from '../styles/PreviewSection';
import { CheckoutButton } from 'models/cart/styles/CheckoutButton';
import { useCart } from 'models/cart/useCart';

type Props = {};

const PreviewMobileHeading: React.FunctionComponent<Props> =
  (): JSX.Element => {
    const cart = useCart();

    return (
      <React.Fragment>
        <PreviewHeading>
          <CheckoutButton>{data.buttons.checkout}</CheckoutButton>
          <a>{data.preview.links.continue}</a>
        </PreviewHeading>
        <PreviewTitle variant="h1" cartCount={5}>
          {data.preview.title}
        </PreviewTitle>
      </React.Fragment>
    );
  };

export default PreviewMobileHeading;
