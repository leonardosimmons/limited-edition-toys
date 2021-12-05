import React from 'react';
import data from 'data/pages/checkout.json';
import { BillingState } from 'modules/checkout/types';

import { useCheckout } from 'modules/checkout/useCheckout';

import { CheckoutFormContainer } from '../styles/CheckoutStyles';

import Typography from '@mui/material/Typography';

import CheckoutInputGrid from '../CheckoutInputGrid';

const BillingDetails: React.FunctionComponent = (): JSX.Element => {
  const checkout = useCheckout();

  //* -------------------------------------------------
  // Handlers

  const handleBillingChange =
    (key: keyof BillingState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      checkout.updateBilling(key, e.target.value);
    };

  //* -------------------------------------------------
  // Render

  return (
    <CheckoutFormContainer>
      <Typography variant="h2">{data.billing.title}</Typography>
      <CheckoutInputGrid
        context={checkout.billing}
        config={data.billing.inputs}
        onChange={handleBillingChange}
      />
    </CheckoutFormContainer>
  );
};

export default BillingDetails;
