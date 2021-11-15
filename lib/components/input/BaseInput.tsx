import React from 'react';
import { Combinable } from 'utils/types';
import { generateRandomNum } from '../../../lib/functions';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
  label: string;
  propName: keyof any;
  value: Combinable;
  changed: (
    prop: keyof any,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'password' | 'text';
  variant?: 'filled' | 'outlined' | 'standard';
};

const BaseInput: React.FunctionComponent<Props> = ({
  label,
  propName,
  value,
  changed,
  type = 'text',
  variant = 'standard',
}): JSX.Element => {
  const [key, setKey] = React.useState<number>();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  React.useEffect(() => {
    setKey(generateRandomNum(1000, 9999));
  }, []);

  //* -------------------------------------------------
  // Handlers

  function handleShowPassword(): void {
    setShowPassword((state) => !state);
  }

  function handleOnMouseDown(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
  }

  //* -------------------------------------------------
  // Render

  return (
    <FormControl variant={variant}>
      <InputLabel htmlFor={`${variant}-input-${key})}`}>{label}</InputLabel>
      <OutlinedInput
        id={`outlined-input-${key}`}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={changed(propName)}
        endAdornment={
          type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleOnMouseDown}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        label={label}
      />
    </FormControl>
  );
};

export default BaseInput;
