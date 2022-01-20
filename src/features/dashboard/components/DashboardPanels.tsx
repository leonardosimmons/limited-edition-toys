import React from 'react';
import BasePanel from './panels/BasePanel';
import InformationPanel from './panels/information/InformationPanel';
import ShippingPanel from './panels/shipping/ShippingPanel';

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
    case 1: {
      return <ShippingPanel />;
    }
    case 2: {
      return <BasePanel name={'orders'}>{'No past orders'}</BasePanel>
    }
    default:
      return <BasePanel name={'placeholder'}>{'Placeholder panel'}</BasePanel>;
  }
};

export default DashboardPanels;