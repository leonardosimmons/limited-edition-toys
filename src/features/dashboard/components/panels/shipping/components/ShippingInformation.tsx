import React from 'react';
import data from 'data/dashboard.json';
import { KeyValuePair } from 'utils/types';
import { ShippingInformation } from '../../../../types';
import { VendCustomer } from '../../../../../../../modules/vend/types';

import { useDashboard } from '../../../../hooks/useDashboard';
import { useVend } from '../../../../../../../modules/vend/useVend';

import {
  ShippingPanelHeading,
  ShippingPanelWrapper,
  Header,
} from '../styles/ShippingPanelStyles';
import { DashboardInputWrapper, DashboardLoadSpinner } from '../../../../styles/Dashboard';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import DashboardInput from '../../../DashboardInput';

const ShippingInformation: React.FunctionComponent = (): JSX.Element => {
  const vend = useVend();
  const ctx = useDashboard();

  function handleEditMode(): void {
    ctx.shipping.editMode(!ctx.shipping.status.editMode);
  }

  function handleInputChange<T>(key: keyof T) {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      ctx.shipping.update.info(
        key as keyof ShippingInformation,
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

  function handleValueReset(propName: keyof ShippingInformation): void {
    ctx.shipping.update.info(propName, '');
  }

  return (
    <ShippingPanelWrapper>
      <ShippingPanelHeading disableGutters>
        <Header variant={'h3'}>{data.shipping.headers.account}</Header>
        <Typography variant={'caption'} onClick={handleEditMode}>
          {ctx.shipping.status.editMode ? 'back' : 'edit'}
        </Typography>
      </ShippingPanelHeading>
      {ctx.shipping.status.editMode ? (
        data.shipping.inputs.map((input, index) => (
          <DashboardInput
            key={index}
            propName={input.propName}
            label={input.placeholder}
            valueKey={input.key as keyof VendCustomer}
            value={ctx.shipping![input.propName as keyof ShippingInformation] as string}
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
        data.shipping.textInputs.map((input, index) => (
          <DashboardInputWrapper key={index} type={'text'}>
            <Typography variant={'h6'}>{input.placeholder}</Typography>
            <Typography variant={'caption'}>
              {vend.customers.status.current !== 'loading' &&
                vend.customers.current![input.key as keyof VendCustomer]}
            </Typography>
          </DashboardInputWrapper>
        ))
      )}
    </ShippingPanelWrapper>
  );
};

export default ShippingInformation;
