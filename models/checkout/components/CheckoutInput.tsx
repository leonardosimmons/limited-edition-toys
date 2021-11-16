import React from 'react';
import { Combinable } from 'utils/types';
import { BillingState, ShippingState } from 'models/checkout/types';

import { CheckoutInputBox } from './styles/CheckoutStyles';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

type Props = {
  propName: keyof ShippingState | keyof BillingState;
  value: Combinable;
  changed: (
    prop: keyof ShippingState | keyof BillingState,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
};

const CheckoutInput: React.FunctionComponent<Props> = ({
  propName,
  value,
  changed,
  label,
  placeholder,
}): JSX.Element => {
  return (
    <CheckoutInputBox variant="outlined">
      {label && (
        <InputLabel htmlFor={`billing-input-${propName}`}>{label}</InputLabel>
      )}
      <OutlinedInput
        id={`billing-input-${propName}`}
        type="text"
        size="small"
        label={label}
        value={value}
        placeholder={placeholder ?? undefined}
        onChange={changed(propName)}
      />
    </CheckoutInputBox>
  );
};

export default CheckoutInput;
