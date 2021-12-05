import React from 'react';
import { useAppSelector } from 'src/redux';
import { ProductCartToken } from 'modules/product/types';
import data from 'data/pages/cart.json';
import { Links } from 'utils/keys';

import { useRouter } from 'next/router';
import { appSelector } from 'src/redux/selector';

import {
  PreviewAction,
  PreviewMainContainer,
  PreviewProductGrid,
} from './styles/PreviewSection';
import { CheckoutButton } from 'modules/cart/styles/CheckoutButton';

import Grid from '@mui/material/Grid';

import PreviewMobileHeading from './components/mobileHeading';
import PreviewDesktopHeading from './components/desktopHeading';
import ProductCartCard from 'modules/product/components/cart-card/ProductCartCard';

const ShoppingCartPreview: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const ctx = useAppSelector(appSelector);

  //* -------------------------------------------------
  // Handlers

  function handleCheckoutButton(): void {
    router.push(Links.BILLING);
  }

  //* -------------------------------------------------
  // Render
  return (
    <PreviewMainContainer disableGutters maxWidth={false}>
      {ctx.ui.status.viewport === 'mobile' ? (
        <PreviewMobileHeading />
      ) : (
        <PreviewDesktopHeading />
      )}
      <PreviewProductGrid container>
        {ctx.cart.items &&
          ctx.cart.items.map((item: ProductCartToken, index: number) => (
            <Grid item key={index}>
              <ProductCartCard token={item} />
            </Grid>
          ))}
      </PreviewProductGrid>
      {ctx.ui.status.viewport !== 'mobile' && (
        <PreviewAction>
          <CheckoutButton
            onClick={handleCheckoutButton}
            disabled={ctx.cart.items.length === 0 ? true : false}>
            {data.buttons.checkout}
          </CheckoutButton>
        </PreviewAction>
      )}
    </PreviewMainContainer>
  );
};

export default ShoppingCartPreview;
