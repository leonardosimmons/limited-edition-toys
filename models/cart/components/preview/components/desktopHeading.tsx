import React from 'react';
import data from 'data/pages/cart.json';

import { PreviewHeading, PreviewTitle } from '../styles/PreviewSection';
import { useCart } from 'models/cart/hooks/useCart';

type Props = {};

const PreviewDesktopHeading: React.FunctionComponent<Props> =
  (): JSX.Element => {
    const cart = useCart();

    return (
      <PreviewHeading>
        <PreviewTitle variant="h1" cartCount={cart.count}>
          {data.preview.title}
        </PreviewTitle>
        <a>{data.preview.links.continue}</a>
      </PreviewHeading>
    );
  };

export default PreviewDesktopHeading;
