import React from 'react';
import data from 'data/pages/checkout.json';
import { BillingState } from 'models/checkout/types';
import { useCheckout } from 'models/checkout/useCheckout';
import { BillingDetailsMainContainer } from './styles/BillingDetailsSection';

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
    <BillingDetailsMainContainer>
      <Typography variant="h2">{data.billing.title}</Typography>
      <CheckoutInputGrid
        context={checkout.billing}
        config={data.billing.inputs}
        onChange={handleBillingChange}
      />
    </BillingDetailsMainContainer>
  );
};

export default BillingDetails;
