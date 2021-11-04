import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Zoom from '@mui/material/Zoom';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MobileMenuTab from '../styles/MobileMenuTab';

type Props = {
  drawerToggle: (
    open: boolean,
  ) => (e: React.KeyboardEvent | React.MouseEvent) => void;
};

const MobileMenuTabs: React.FunctionComponent<Props> = ({
  drawerToggle,
}): JSX.Element => {
  return (
    <Toolbar disableGutters>
      <Zoom in appear unmountOnExit>
        <MobileMenuTab>
          <ShoppingCartIcon />
        </MobileMenuTab>
      </Zoom>
      <Zoom in appear unmountOnExit>
        <MobileMenuTab onClick={drawerToggle(true)}>
          <MenuIcon />
        </MobileMenuTab>
      </Zoom>
    </Toolbar>
  );
};

export default MobileMenuTabs;
