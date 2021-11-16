import React from 'react';
import data from 'data/pages/checkout.json';
import { ShippingState } from 'models/checkout/types';

import { useCheckout } from 'models/checkout/useCheckout';

import { CheckoutFormContainer } from '../styles/CheckoutStyles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import CheckoutInputGrid from '../CheckoutInputGrid';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';

const ShippingDetails: React.FunctionComponent = (): JSX.Element => {
  const checkout = useCheckout();
  const ui = useAppSelector(uiSelector);

  //* -------------------------------------------------
  // Handlers

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    checkout.toggleShipping(e.target.checked);
  }

  const handleShippingChange =
    (key: keyof ShippingState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      checkout.updateShipping(key, e.target.value);
    };

  //* -------------------------------------------------
  // Render

  return (
    <CheckoutFormContainer>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        <Checkbox
          size="small"
          checked={ui.checkboxes.shipping.isChecked}
          onChange={handleCheckbox}
          inputProps={{ 'aria-label': 'controlled-shipping-details' }}
        />
        <Typography variant="h2">{data.shipping.heading}</Typography>
      </Box>
      {ui.checkboxes.shipping.isChecked && (
        <CheckoutInputGrid
          context={checkout.shipping}
          config={data.shipping.inputs}
          onChange={handleShippingChange}
        />
      )}
    </CheckoutFormContainer>
  );
};

export default ShippingDetails;
