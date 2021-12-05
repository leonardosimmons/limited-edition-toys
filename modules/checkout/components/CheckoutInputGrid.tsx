import React from 'react';
import {
  CheckoutInputConfig,
  BillingState,
  ShippingState,
} from 'modules/checkout/types';

import { CheckoutInputMainGrid } from './styles/CheckoutStyles';

import Grid from '@mui/material/Grid';

import CheckoutInput from './CheckoutInput';

type Props = {
  config: CheckoutInputConfig[];
  context: BillingState | ShippingState;
  onChange: (
    prop: keyof BillingState | keyof ShippingState,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckoutInputGrid: React.FunctionComponent<Props> = ({
  config,
  context,
  onChange,
}): JSX.Element => {
  return (
    <CheckoutInputMainGrid container>
      {config.map((item: CheckoutInputConfig, index: number) =>
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
                context[
                  item.propName as keyof BillingState | keyof ShippingState
                ] as string
              }
              propName={
                item.propName as keyof BillingState | keyof ShippingState
              }
              changed={onChange}
            />
            <CheckoutInput
              placeholder={item.placeholder}
              value={context['apt'] as string}
              propName={'apt'}
              changed={() => onChange('apt')}
            />
          </Grid>
        ) : (
          <Grid item key={index}>
            <CheckoutInput
              label={item.label}
              value={
                context[
                  item.propName as keyof BillingState | keyof ShippingState
                ] as string
              }
              propName={
                item.propName as keyof BillingState | keyof ShippingState
              }
              changed={onChange}
            />
          </Grid>
        ),
      )}
    </CheckoutInputMainGrid>
  );
};

export default CheckoutInputGrid;
