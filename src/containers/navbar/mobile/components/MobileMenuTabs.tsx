import React from 'react';
import { useRouter } from 'next/router';
import { Links } from 'utils/keys';

import { useCart } from 'models/cart/hooks/useCart';

import MobileMenuTab from '../styles/MobileMenuTab';

import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Zoom from '@mui/material/Zoom';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
  drawerToggle: (
    open: boolean,
  ) => (e: React.KeyboardEvent | React.MouseEvent) => void;
};

const MobileMenuTabs: React.FunctionComponent<Props> = ({
  drawerToggle,
}): JSX.Element => {
  const router = useRouter();
  const cart = useCart();

  //* -------------------------------------------------
  // Handlers

  function handleCartIconClick(): void {
    router.push(Links.SHOPPING_CART);
  }

  //* -------------------------------------------------
  // Render

  return (
    <Toolbar disableGutters>
      <Zoom in appear unmountOnExit>
        <MobileMenuTab onClick={handleCartIconClick}>
          <Badge badgeContent={cart.count}>
            <ShoppingCartIcon />
          </Badge>
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
