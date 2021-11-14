import React from 'react';
import data from 'data/pages/cart.json';

import { useCart } from 'models/cart/hooks/useCart';

import {
  SummaryCheckoutAction,
  SummaryInfoDisplay,
  SummaryMainContainer,
} from './styles/SummarySection';
import { CheckoutButton } from 'models/cart/styles/CheckoutButton';

import InfoDisplayItem from '../InfoDisplay/CartInfoDisplayItem';

const ShoppingCartSummary: React.FunctionComponent = (): JSX.Element => {
  const cart = useCart();

  return (
    <SummaryMainContainer maxWidth={false} disableGutters>
      <SummaryInfoDisplay container>
        <InfoDisplayItem title={'Subtotal'} value={cart.total} />
        <InfoDisplayItem title={'Shipping'} value={10.0} />
        <InfoDisplayItem title={'Tax'} value={0.0} />
        <InfoDisplayItem bold title={'Total'} value={cart.total + 10.0} />
      </SummaryInfoDisplay>
      <SummaryCheckoutAction>
        <CheckoutButton fullWidth>{data.summary.button}</CheckoutButton>
      </SummaryCheckoutAction>
    </SummaryMainContainer>
  );
};

export default ShoppingCartSummary;
