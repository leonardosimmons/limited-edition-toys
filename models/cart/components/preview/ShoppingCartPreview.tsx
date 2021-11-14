import React from 'react';
import { useAppSelector } from 'src/redux';
import data from 'data/pages/cart.json';
import { ProductCartToken } from 'models/product/types';

import { appSelector } from 'src/redux/selector';

import {
  PreviewAction,
  PreviewMainContainer,
  PreviewProductGrid,
} from './styles/PreviewSection';
import { CheckoutButton } from 'models/cart/styles/CheckoutButton';

import Grid from '@mui/material/Grid';

import PreviewMobileHeading from './components/mobileHeading';
import PreviewDesktopHeading from './components/desktopHeading';
import ProductCartCard from 'models/product/components/cart-card/ProductCartCard';

const ShoppingCartPreview: React.FunctionComponent = (): JSX.Element => {
  const ctx = useAppSelector(appSelector);

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
          <CheckoutButton>{data.buttons.checkout}</CheckoutButton>
        </PreviewAction>
      )}
    </PreviewMainContainer>
  );
};

export default ShoppingCartPreview;
