import React from 'react';
import { ProductCheckoutToken } from '../../../../../product/types';

import {
  CheckoutReceiptItem,
  CheckoutReceiptWrapper, CheckoutSpacer,
} from './CheckoutReciptStyles';

import Typography from '@mui/material/Typography';

type Props = {
  items: ProductCheckoutToken[];
};

const CheckoutReceipt: React.FunctionComponent<Props> = ({
  items,
}): JSX.Element => {
  const [subTotal, setSubTotal] = React.useState<number>(0);

  React.useEffect(() => {
    items.forEach((item) => {
      setSubTotal((state) => state + parseInt(item.price));
    });
  }, []);

  return (
    <CheckoutReceiptWrapper>
      {items.map((item, index) => (
        <CheckoutReceiptItem key={index} lineItem>
          <Typography
            variant={'body1'}>{`${item.quantity} x ${item.name}`}</Typography>
          <Typography variant={'body1'}>{`$${item.price}.00`}</Typography>
        </CheckoutReceiptItem>
      ))}
      <CheckoutSpacer space={'2rem'} />
      <CheckoutReceiptItem subtotal>
        <Typography variant={'body1'}>{'SubTotal'}</Typography>
        <Typography variant={'body1'}>{`$${subTotal}.00`}</Typography>
      </CheckoutReceiptItem>
      <CheckoutReceiptItem shipping>
        <Typography variant={'body1'}>{'Shipping'}</Typography>
        <Typography variant={'body1'}>{'$10.00'}</Typography>
      </CheckoutReceiptItem>
      <CheckoutReceiptItem total>
        <Typography variant={'body1'}>{'Order Total'}</Typography>
        <Typography variant={'body1'}>{`$${subTotal + 10}.00`}</Typography>
      </CheckoutReceiptItem>
    </CheckoutReceiptWrapper>
  );
};

export default CheckoutReceipt;
