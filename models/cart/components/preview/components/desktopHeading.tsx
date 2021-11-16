import React from 'react';
import Link from 'next/link';
import data from 'data/pages/cart.json';
import { Links } from 'utils/keys';

import { useCart } from 'models/cart/hooks/useCart';

import { PreviewHeading, PreviewTitle } from '../styles/PreviewSection';

const PreviewDesktopHeading: React.FunctionComponent = (): JSX.Element => {
  const cart = useCart();

  return (
    <PreviewHeading>
      <PreviewTitle variant="h1" cartCount={cart.count}>
        {data.preview.title}
      </PreviewTitle>
      <Link href={Links.HOME}>
        <a>{data.preview.links.continue}</a>
      </Link>
    </PreviewHeading>
  );
};

export default PreviewDesktopHeading;
