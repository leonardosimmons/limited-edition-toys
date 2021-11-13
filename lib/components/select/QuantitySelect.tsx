import * as React from 'react';
import data from 'data/selections/CartQuantitySelection.json';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {};

const QuantitySelect: React.FunctionComponent<Props> = (): JSX.Element => {
  const [selectedQuantity, setSelectedQuantity] = React.useState<number>(1); // relpace with initial product quantity

  function handleSelectionChange(e: SelectChangeEvent) {
    setSelectedQuantity(parseInt(e.target.value));
  }

  return (
    <FormControl>
      <FormHelperText>Quantity</FormHelperText>
      <Select
        id="cart-quantity-select"
        value={selectedQuantity.toString()}
        onChange={handleSelectionChange}
        inputProps={{ 'aria-label': 'Without label' }}>
        {data.quantities.map((selection) => (
          <MenuItem value={selection.value} sx={{ fontSize: '1rem' }}>
            {selection.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuantitySelect;
