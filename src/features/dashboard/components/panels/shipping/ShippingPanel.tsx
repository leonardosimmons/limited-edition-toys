import React from 'react';

import BasePanel from '../BasePanel';
import { Header } from './styles/ShippingPanelStyles';
import ShippingInformation from './components/ShippingInformation';

const ShippingPanel: React.FunctionComponent = (): JSX.Element => {
  return (
    <BasePanel name={'information'}>
      <Header variant={'h3'}>EDIT INFORMATION</Header>
       <ShippingInformation />
    </BasePanel>
  );
};

export default ShippingPanel;
