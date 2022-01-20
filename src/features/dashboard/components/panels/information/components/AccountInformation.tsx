import React from 'react';
import data from 'data/dashboard.json';
import { KeyValuePair } from 'utils/types';
import { AccountInformation } from '../../../../types';
import { VendCustomer } from '../../../../../../../modules/vend/types';

import { useDashboard } from '../../../../hooks/useDashboard';
import { useVend } from '../../../../../../../modules/vend/useVend';

import {
  AccountInformationHeading,
  AccountInformationWrapper,
  Header,
} from '../styles/InformationPanelStyles';
import { DashboardInputWrapper, DashboardLoadSpinner } from '../../../../styles/Dashboard';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import DashboardInput from '../../../DashboardInput';

const AccountInformation: React.FunctionComponent = (): JSX.Element => {
  const vend = useVend();
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
    newValue: KeyValuePair<keyof VendCustomer, string>,
  ): Promise<void> {
    try {
      await vend.customers.update({
        id: vend.customers.current?.id as string,
        token: {
          [newValue.key]: newValue.value
        }
      })
    }
    catch(err: any) {
      alert('Unable to update user at the moment, please try again later')
    }
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
            valueKey={input.key as keyof VendCustomer}
            value={ctx.information![input.propName as keyof AccountInformation]}
            placeholder={vend.customers.current![input.key as keyof VendCustomer] as string}
            onChange={handleInputChange}
            onClick={handleUpdate}
            valueReset={handleValueReset}
          />
        ))
      ) : vend.customers.status.current === 'loading' ? (
        <DashboardLoadSpinner>
          <CircularProgress />
        </DashboardLoadSpinner>
      ) : (
        data.information.textInputs.map((input, index) => (
          <DashboardInputWrapper key={index} type={'text'}>
            <Typography variant={'h6'}>{input.placeholder}</Typography>
            <Typography variant={'caption'}>
              {vend.customers.status.current !== 'loading' &&
                vend.customers.current![input.key as keyof VendCustomer]}
            </Typography>
          </DashboardInputWrapper>
        ))
      )}
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
