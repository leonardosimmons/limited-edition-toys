import React from 'react';

import { Header } from './styles/InformationPanelStyles';

import BasePanel from '../BasePanel';
import AccountInformation from './components/AccountInformation';

const InformationPanel: React.FunctionComponent = (): JSX.Element => {
  return (
    <BasePanel name={'information'}>
      <Header variant={'h3'}>EDIT INFORMATION</Header>
      <AccountInformation />
    </BasePanel>
  );
};

export default InformationPanel;
