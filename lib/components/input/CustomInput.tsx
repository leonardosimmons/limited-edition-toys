import React from 'react';

import InputUnstyled, { InputUnstyledProps } from '@mui/core/InputUnstyled';
import { StyledComponent } from '@mui/styles';

const InputRef = React.forwardRef(function InputRef(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <InputUnstyled {...props} ref={ref} />;
});

type Props = {
  placeholder: string;
  propName: string;
  value: string;
  input: StyledComponent<any>;
  onChange<T>(
    key: keyof T,
  ): (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FunctionComponent<Props> = ({
  placeholder,
  propName,
  value,
  input,
  onChange,
}): JSX.Element => {
  return (
    <InputRef
      aria-label={placeholder}
      placeholder={placeholder}
      value={value}
      onChange={onChange(propName)}
      components={{ Input: input }}
    />
  );
};

export default CustomInput;
