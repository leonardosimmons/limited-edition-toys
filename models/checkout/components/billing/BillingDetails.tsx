import React from 'react';
import data from 'data/pages/checkout.json';
import { CheckoutInputConfig, BillingState } from 'models/checkout/types';

import { useCheckout } from 'models/checkout/useCheckout';

import {
  BillingDetailsInputGrid,
  BillingDetailsMainContainer,
} from './styles/BillingDetailsSection';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CheckoutInput from '../CheckoutInput';

const BillingDetails: React.FunctionComponent = (): JSX.Element => {
  const checkout = useCheckout();

  //* -------------------------------------------------
  // Handlers

  const handleChange =
    (key: keyof BillingState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      checkout.updateBilling(key, e.target.value);
    };

  //* -------------------------------------------------
  // Render

  return (
    <BillingDetailsMainContainer>
      <Typography variant="h2">{data.billing.title}</Typography>
      <BillingDetailsInputGrid container>
        {data.billing.inputs.map((item: CheckoutInputConfig, index: number) =>
          item.placeholder ? (
            <Grid
              item
              key={index}
              sx={{
                display: 'flex',
                '& > div.MuiFormControl-root:nth-of-type(1)': {
                  flex: 1,
                  marginRight: '10px',
                },
                '& > div.MuiFormControl-root:nth-of-type(2)': {
                  width: '25%',
                },
              }}>
              <CheckoutInput
                label={item.label}
                value={
                  checkout.billing[
                    item.propName as keyof BillingState
                  ] as string
                }
                propName={item.propName as keyof BillingState}
                changed={handleChange}
              />
              <CheckoutInput
                placeholder={item.placeholder}
                value={checkout.billing['apt'] as string}
                propName={'apt'}
                changed={() => handleChange('apt')}
              />
            </Grid>
          ) : (
            <Grid item key={index}>
              <CheckoutInput
                label={item.label}
                value={
                  checkout.billing[
                    item.propName as keyof BillingState
                  ] as string
                }
                propName={item.propName as keyof BillingState}
                changed={handleChange}
              />
            </Grid>
          ),
        )}
      </BillingDetailsInputGrid>
    </BillingDetailsMainContainer>
  );
};

export default BillingDetails;
