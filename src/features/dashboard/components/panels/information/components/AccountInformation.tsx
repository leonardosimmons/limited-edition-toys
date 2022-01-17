import React from 'react';
import data from 'data/dashboard.json';
import { AccountInformation } from '../../../../types';
import { WordpressUser } from 'modules/wordpress/types';

import { useUser } from 'modules/user/hooks/useUser';
import { useDashboard } from '../../../../hooks/useDashboard';

import {
  AccountInformationHeading,
  AccountInformationInput,
  AccountInformationWrapper,
  Header,
} from '../styles/InformationPanelStyles';
import {
  DashboardCustomInput,
  DashboardLoadSpinner,
} from '../../../../styles/Dashboard';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import CustomInput from 'lib/components/input/CustomInput';

const AccountInformation: React.FunctionComponent = (): JSX.Element => {
  const user = useUser();
  const ctx = useDashboard();

  function handleInputChange<T>(key: keyof T) {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      ctx.information.update.info(key as string, e.target.value);
    };
  }

  function handleEditMode(): void {
    ctx.information.editMode(!ctx.information.status.editMode);
  }

  return (
    <AccountInformationWrapper>
      <AccountInformationHeading disableGutters>
        <Header variant={'h3'}>{data.information.headers.account}</Header>
        <Typography variant={'caption'} onClick={handleEditMode}>
          {'edit'}
        </Typography>
      </AccountInformationHeading>
      {ctx.information.status.editMode ? (
        data.information.inputs.map((input, index) => (
          <AccountInformationInput key={index}>
            <Typography variant={'h6'}>{input.placeholder}</Typography>
            <CustomInput
              placeholder={user.info[input.key as keyof WordpressUser] as string}
              propName={input.propName}
              value={
                ctx.information![input.propName as keyof AccountInformation]
              }
              onChange={handleInputChange}
              input={DashboardCustomInput}
            />
          </AccountInformationInput>
        ))
      ) : user.status === 'loading' ? (
        <DashboardLoadSpinner>
          <CircularProgress />
        </DashboardLoadSpinner>
      ) : (
        data.information.textInputs.map((input, index) => (
          <AccountInformationInput key={index} type={'text'}>
            <Typography variant={'h6'}>{input.placeholder}</Typography>
            <Typography variant={'caption'}>
              {user.status !== 'loading' &&
                user.info[input.key as keyof WordpressUser]}
            </Typography>
          </AccountInformationInput>
        ))
      )}
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
