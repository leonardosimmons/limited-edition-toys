import React from 'react';
import { ShippingState } from '../../types';
import { ProductCheckoutToken } from '../../../product/types';

import {
  CheckoutDisplayWrapper,
  CheckoutDisplayHeading,
  CheckoutDisplayOrder,
} from './CheckoutSuccessStyles';

import CheckoutSuccessShipping from './components/shipping/CheckoutSuccessShipping';
import CheckoutReceipt from './components/receipt/CheckoutRecipt';

type Props = {
  orderId: string;
  items: ProductCheckoutToken[];
  shipping: ShippingState;
};

const CheckoutSuccessDisplay: React.FunctionComponent<Props> = ({
  orderId,
  items,
  shipping
}): JSX.Element => {
  return (
    <CheckoutDisplayWrapper >
      <CheckoutDisplayHeading>
        <strong>Order</strong>
        {`: #${orderId}`}
      </CheckoutDisplayHeading>
      <CheckoutDisplayOrder maxWidth={false}>
        <CheckoutSuccessShipping shipping={shipping}/>
        <CheckoutReceipt items={items} />
      </CheckoutDisplayOrder>
    </CheckoutDisplayWrapper>
  );
};

export default CheckoutSuccessDisplay;
