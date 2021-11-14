import React from 'react';
import { useRouter } from 'next/router';
import data from 'data/pages/cart.json';
import { Links } from 'utils/keys';

import { useCart } from 'models/cart/hooks/useCart';

import {
  SummaryCheckoutAction,
  SummaryInfoDisplay,
  SummaryMainContainer,
} from './styles/SummarySection';
import { CheckoutButton } from 'models/cart/styles/CheckoutButton';

import InfoDisplayItem from '../InfoDisplay/CartInfoDisplayItem';

const ShoppingCartSummary: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const cart = useCart();

  //* -------------------------------------------------
  // Handlers

  function handleCheckoutButton(): void {
    router.push(Links.BILLING);
  }

  //* -------------------------------------------------
  // Render

  return (
    <SummaryMainContainer maxWidth={false} disableGutters>
      <SummaryInfoDisplay container>
        <InfoDisplayItem title={'Subtotal'} value={cart.total} />
        <InfoDisplayItem title={'Shipping'} value={10.0} />
        <InfoDisplayItem title={'Tax'} value={0.0} />
        <InfoDisplayItem bold title={'Total'} value={cart.total + 10.0} />
      </SummaryInfoDisplay>
      <SummaryCheckoutAction>
        <CheckoutButton fullWidth onClick={handleCheckoutButton}>
          {data.summary.button}
        </CheckoutButton>
      </SummaryCheckoutAction>
    </SummaryMainContainer>
  );
};

export default ShoppingCartSummary;
