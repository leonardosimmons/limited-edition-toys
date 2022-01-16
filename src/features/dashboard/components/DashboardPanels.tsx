import React from 'react';
import BasePanel from './panels/BasePanel';
import InformationPanel from './panels/information/InformationPanel';

type Props = {
  value: number;
};

const DashboardPanels: React.FunctionComponent<Props> = ({
  value,
}): JSX.Element => {
  switch (value) {
    case 0: {
      return <InformationPanel />;
    }
    default:
      return <BasePanel name={'placeholder'}>{'Placeholder panel'}</BasePanel>;
  }
};

export default DashboardPanels;