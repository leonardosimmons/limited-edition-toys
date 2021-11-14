import * as React from 'react';
import data from 'data/selections/CartQuantitySelection.json';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  value: number;
  stock: number;
  onChange: (e: SelectChangeEvent) => void;
};

const QuantitySelect: React.FunctionComponent<Props> = ({
  value,
  stock,
  onChange,
}): JSX.Element => {
  return (
    <FormControl>
      <FormHelperText>Quantity</FormHelperText>
      <Select
        id="cart-quantity-select"
        value={value.toString()}
        onChange={onChange}
        inputProps={{ 'aria-label': 'Without label' }}>
        {data.quantities.slice(0, stock).map((selection, index) => (
          <MenuItem
            key={index}
            value={selection.value}
            sx={{ fontSize: '1rem' }}>
            {selection.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuantitySelect;
