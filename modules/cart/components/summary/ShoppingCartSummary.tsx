import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import data from 'data/pages/cart.json';
import { Links } from 'utils/keys';

import { useAppSelector } from 'src/redux';
import { appSelector } from 'src/redux/selector';
import { useCart } from 'modules/cart/hooks/useCart';
import { OrderModel } from 'modules/order/order.model';
import { useCheckPromotions } from 'modules/promotions/hooks/useCheckPromotions';

import {
  SummaryCheckoutAction,
  SummaryInfoDisplay,
  SummaryMainContainer,
} from './styles/SummarySection';
import { CheckoutButton } from 'modules/cart/styles/CheckoutButton';

import InfoDisplayItem from '../InfoDisplay/CartInfoDisplayItem';
import PromoCode from 'modules/promotions/components/promo-code/PromoCode';

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
  const [hasPromoCode, setHasPromoCode] = React.useState<boolean>(false);

  function handleHasPromoCode(code: boolean) {
    setHasPromoCode(code);
  }

  // TODO: add promo code

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
            discounts: discounts.items.length > 0 ? true : false,
            promotion: hasPromoCode ? true : false,
          })
          .then((res: any) => router.push(res.data));
      } catch (err) {
        alert('Error: Something went wrong, double check entered data');
      }
      return;
    }
    router.push(Links.BILLING);
  }

  //* -------------------------------------------------
  // Render

  return (
    <SummaryMainContainer maxWidth={false} disableGutters>
      {type === 'checkout' && <PromoCode hasPromo={handleHasPromoCode} />}
      <SummaryInfoDisplay container>
        <InfoDisplayItem title={'Shipping'} value={10.0} />
        <InfoDisplayItem
          bold
          title={'Subtotal'}
          value={cart.total + 10}
          hasPromo={hasPromoCode}
        />
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
