import React from 'react';
import { Combinable } from 'utils/types';
import { BillingState } from 'models/checkout/types';

import { BillingInputBox } from './billing/styles/BillingDetailsSection';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

type Props = {
  propName: keyof BillingState;
  value: Combinable;
  changed: (
    prop: keyof BillingState,
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
    <BillingInputBox variant="outlined">
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
    </BillingInputBox>
  );
};

export default CheckoutInput;
