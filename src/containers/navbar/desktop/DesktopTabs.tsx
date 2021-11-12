import React from 'react';
import { useRouter } from 'next/router';

import { DesktopNavbarTabButton } from './styles/DesktopNavbarTabButton';
import { DesktopNavbarDivider } from './styles/DesktopNavbarDivider';
import { DesktopNavbarCartIcon } from './styles/DesktopNavbarCartIcon';

import Badge from '@mui/material/Badge';

import FaceTwoTone from '@mui/icons-material/FaceTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Links } from 'utils/keys';
import { useCart } from 'models/cart/useCart';

type Props = {};

const DesktopTabs: React.FunctionComponent<Props> = (): JSX.Element => {
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
    <React.Fragment>
      {/* WISHLIST comming soon 
      <DesktopNavbarTabButton startIcon={<AssignmentTwoToneIcon />}>
        Wishlist
      </DesktopNavbarTabButton> */}
      <DesktopNavbarTabButton startIcon={<FaceTwoTone />}>
        My Account
      </DesktopNavbarTabButton>
      <DesktopNavbarDivider orientation="vertical" flexItem />
      <DesktopNavbarCartIcon
        aria-label="shopping cart"
        size="small"
        onClick={handleCartIconClick}>
        <Badge badgeContent={cart.count}>
          <ShoppingCartTwoToneIcon fontSize="inherit" />
        </Badge>
      </DesktopNavbarCartIcon>
    </React.Fragment>
  );
};

export default DesktopTabs;
