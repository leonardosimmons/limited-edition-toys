import React from 'react';
import data from 'data/pages/cart.json';

import {
  SummaryCheckoutAction,
  SummaryInfoDisplay,
  SummaryMainContainer,
} from './styles/SummarySection';
import { CheckoutButton } from 'models/cart/styles/CheckoutButton';

import InfoDisplayItem from '../InfoDisplay/CartInfoDisplayItem';

type Props = {};

const ShoppingCartSummary: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <SummaryMainContainer maxWidth={false} disableGutters>
      <SummaryInfoDisplay container>
        <InfoDisplayItem title={'Subtotal'} value={100} />
        <InfoDisplayItem title={'Shipping'} value={100} />
        <InfoDisplayItem title={'Tax'} value={100} />
        <InfoDisplayItem bold title={'Total'} value={100} />
      </SummaryInfoDisplay>
      <SummaryCheckoutAction>
        <CheckoutButton>{data.summary.button}</CheckoutButton>
      </SummaryCheckoutAction>
    </SummaryMainContainer>
  );
};

export default ShoppingCartSummary;
