import React from 'react';
import { KeyValuePair } from '../../../../utils/types';

import {
  DashboardCustomInput,
  DashboardInputButton,
  DashboardInputWrapper,
} from '../styles/Dashboard';

import Typography from '@mui/material/Typography';

import CustomInput from '../../../../lib/components/input/CustomInput';

type Props = {
  label: string;
  propName: any;
  value: string;
  valueKey: any;
  placeholder: string;
  onChange<T>(key: T): (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick(newValue: KeyValuePair<any, any>): Promise<void>;
  valueReset(propName: any): void;
};

const DashboardInput: React.FunctionComponent<Props> = ({
  label,
  propName,
  value,
  valueKey,
  placeholder,
  onChange,
  onClick,
  valueReset,
}): JSX.Element => {
  const [status, setStatus] = React.useState<'error' | 'pending' | 'success'>(
    'pending',
  );

  async function handleUpdate(): Promise<void> {
    try {
      await onClick({ key: valueKey, value }).then(() => setStatus('success'));
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <DashboardInputWrapper>
      <Typography variant={'h6'}>{label}</Typography>
      <CustomInput
        placeholder={placeholder}
        propName={propName}
        value={value}
        onChange={onChange}
        input={DashboardCustomInput}
      />
      <DashboardInputButton
        status={status}
        variant={'contained'}
        onClick={handleUpdate}>
        {status === 'pending'
          ? 'Update'
          : status === 'success'
          ? 'Updated'
          : status === 'error'
          ? 'Error'
          : 'Update'}
      </DashboardInputButton>
    </DashboardInputWrapper>
  );
};

export default DashboardInput;
