import React from 'react';
import data from 'data/pages/cart.json';

import { useCart } from 'models/cart/useCart';

import { CheckoutButton } from 'models/cart/styles/CheckoutButton';
import { PreviewHeading, PreviewTitle } from '../styles/PreviewSection';

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
