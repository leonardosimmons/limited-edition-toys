import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import data from 'data/pages/cart.json';
import { Links } from 'utils/keys';

import { useAppSelector } from 'src/redux';
import { appSelector } from 'src/redux/selector';
import { useCart } from 'modules/cart/hooks/useCart';
import { OrderModel } from 'modules/order/order.model';

import {
  SummaryCheckoutAction,
  SummaryInfoDisplay,
  SummaryMainContainer,
} from './styles/SummarySection';
import { CheckoutButton } from 'modules/cart/styles/CheckoutButton';

import InfoDisplayItem from '../InfoDisplay/CartInfoDisplayItem';
import { useCheckPromotions } from 'modules/promotions/hooks/useCheckPromotions';

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
  // Promotions

  const { discounts } = useCheckPromotions(ctx.cart.items);

  React.useEffect(() => {
    console.log(discounts);
  }, [discounts]);

  //* -------------------------------------------------
  // Handlers

  async function handleCheckoutButton(): Promise<void> {
    if (type === 'checkout') {
      const order = new OrderModel();
      const customerInfo = order.createCustomerToken(ctx.checkout.billing);
      const cartItems = order.createLineItemToken(ctx.cart.items);
      try {
        await axios
          .post('/api/payment/checkout', {
            info: customerInfo,
            items: cartItems,
            discounts,
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
        {/* <InfoDisplayItem title={'Subtotal'} value={cart.total} />
        <InfoDisplayItem title={'Shipping'} value={10.0} />
        <InfoDisplayItem title={'Tax'} value={0.0} /> */}
        <InfoDisplayItem bold title={'Subtotal'} value={cart.total} />
      </SummaryInfoDisplay>
      <SummaryCheckoutAction>
        <CheckoutButton
          fullWidth
          onClick={handleCheckoutButton}
          disabled={ctx.cart.items.length === 0 ? true : false}>
          {data.summary.button}
        </CheckoutButton>
      </SummaryCheckoutAction>
    </SummaryMainContainer>
  );
};

export default ShoppingCartSummary;
