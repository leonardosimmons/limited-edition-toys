import React from 'react';
import Link from 'next/link';
import data from 'data/pages/cart.json';
import { useRouter } from 'next/router';
import { Links } from 'utils/keys';

import { useCart } from 'modules/cart/hooks/useCart';

import { CheckoutButton } from 'modules/cart/styles/CheckoutButton';
import { PreviewHeading, PreviewTitle } from '../styles/PreviewSection';

const PreviewMobileHeading: React.FunctionComponent = (): JSX.Element => {
  const cart = useCart();
  const router = useRouter();

  //* -------------------------------------------------
  // Handlers

  function handleCheckoutButton(): void {
    router.push(Links.BILLING);
  }

  //* -------------------------------------------------
  // Render

  return (
    <React.Fragment>
      <PreviewHeading>
        <CheckoutButton onClick={handleCheckoutButton}>
          {data.buttons.checkout}
        </CheckoutButton>
        <Link href={Links.HOME}>
          <a>{data.preview.links.continue}</a>
        </Link>
      </PreviewHeading>
      <PreviewTitle variant="h1" cartCount={cart.count}>
        {data.preview.title}
      </PreviewTitle>
    </React.Fragment>
  );
};

export default PreviewMobileHeading;
