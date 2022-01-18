import React from 'react';
import { KeyValuePair } from '../../../../utils/types';

import { DashboardCustomInput } from '../styles/Dashboard';
import {
  AccountInformationButton,
  AccountInformationInput,
} from './panels/information/styles/InformationPanelStyles';

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
};

const DashboardInput: React.FunctionComponent<Props> = ({
  label,
  propName,
  value,
  valueKey,
  placeholder,
  onChange,
  onClick,
}): JSX.Element => {
  return (
    <AccountInformationInput>
      <Typography variant={'h6'}>{label}</Typography>
      <CustomInput
        placeholder={placeholder}
        propName={propName}
        value={value}
        onChange={onChange}
        input={DashboardCustomInput}
      />
      <AccountInformationButton
        variant={'contained'}
        onClick={() => onClick({ key: valueKey, value })}>
        {'Update'}
      </AccountInformationButton>
    </AccountInformationInput>
  );
};

export default DashboardInput;
