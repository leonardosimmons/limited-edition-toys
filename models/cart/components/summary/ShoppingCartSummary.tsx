import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import data from 'data/pages/cart.json';
import { Links } from 'utils/keys';

import { useAppSelector } from 'src/redux';
import { appSelector } from 'src/redux/selector';
import { useCart } from 'models/cart/hooks/useCart';
import { OrderModel } from 'models/order/order.model';

import {
  SummaryCheckoutAction,
  SummaryInfoDisplay,
  SummaryMainContainer,
} from './styles/SummarySection';
import { CheckoutButton } from 'models/cart/styles/CheckoutButton';

import InfoDisplayItem from '../InfoDisplay/CartInfoDisplayItem';

type Props = {
  type?: 'checkout' | 'summary';
};

const ShoppingCartSummary: React.FunctionComponent<Props> = ({
  type,
}): JSX.Element => {
  const cart = useCart();
  const router = useRouter();
  const ctx = useAppSelector(appSelector);

  //* -------------------------------------------------
  // Handlers

  async function handleCheckoutButton(): Promise<void> {
    if (type === 'checkout') {
      const order = new OrderModel();
      const customerInfo = order.createCustomerToken(ctx.checkout.billing);
      const cartItems = order.createLineItemToken();
      try {
        await axios
          .post('/api/payment/checkout', {
            info: customerInfo,
            items: cartItems,
          })
          .then((res: any) => router.push(res.data));
      } catch (err) {
        alert('Error: Something went wrong');
      }
      return;
    }
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
