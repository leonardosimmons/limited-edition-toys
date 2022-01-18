import React from 'react';
import data from 'data/dashboard.json';
import { AccountInformation } from '../../../../types';
import { WordpressUser } from 'modules/wordpress/types';
import { KeyValuePair } from 'utils/types';

import { useUser } from 'modules/user/useUser';
import { useDashboard } from '../../../../hooks/useDashboard';

import {
  AccountInformationHeading,
  AccountInformationInput,
  AccountInformationWrapper,
  Header,
} from '../styles/InformationPanelStyles';
import { DashboardLoadSpinner } from '../../../../styles/Dashboard';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import DashboardInput from '../../../DashboardInput';

const AccountInformation: React.FunctionComponent = (): JSX.Element => {
  const user = useUser();
  const ctx = useDashboard();

  function handleEditMode(): void {
    ctx.information.editMode(!ctx.information.status.editMode);
  }

  function handleInputChange<T>(key: keyof T) {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      ctx.information.update.info(
        key as keyof AccountInformation,
        e.target.value,
      );
    };
  }

  async function handleUpdate(
    newValue: KeyValuePair<keyof WordpressUser, string>,
  ): Promise<void> {
    await user.update.info(newValue);
  }

  function handleValueReset(propName: keyof AccountInformation): void {
    ctx.information.update.info(propName, '');
  }

  return (
    <AccountInformationWrapper>
      <AccountInformationHeading disableGutters>
        <Header variant={'h3'}>{data.information.headers.account}</Header>
        <Typography variant={'caption'} onClick={handleEditMode}>
          {ctx.information.status.editMode ? 'back' : 'edit'}
        </Typography>
      </AccountInformationHeading>
      {ctx.information.status.editMode ? (
        data.information.inputs.map((input, index) => (
          <DashboardInput
            key={index}
            propName={input.propName}
            label={input.placeholder}
            valueKey={input.key as keyof WordpressUser}
            value={ctx.information![input.propName as keyof AccountInformation]}
            placeholder={user.info[input.key as keyof WordpressUser] as string}
            onChange={handleInputChange}
            onClick={handleUpdate}
            valueReset={handleValueReset}
          />
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
