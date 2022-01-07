import React from 'react';
import { Links } from 'utils/keys';
import { useRouter } from 'next/router';

import { useLogin } from 'modules/auth/hooks/useLogin';
import { useCart } from 'modules/cart/hooks/useCart';

import { DesktopNavbarTabButton } from './styles/DesktopNavbarTabButton';
import { DesktopNavbarDivider } from './styles/DesktopNavbarDivider';
import { DesktopNavbarCartIcon } from './styles/DesktopNavbarCartIcon';

import Badge from '@mui/material/Badge';

import FaceTwoTone from '@mui/icons-material/FaceTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

type Props = {};

const DesktopTabs: React.FunctionComponent<Props> = (): JSX.Element => {
  const router = useRouter();
  const login = useLogin();
  const cart = useCart();

  //* -------------------------------------------------
  // Handlers

  async function handleCartIconClick(): Promise<void> {
    await router.push(Links.SHOPPING_CART);
  }

  async function handleMyAccountClick(): Promise<void> {
    if (login.status === 'signed-in') {
      await router.push(Links.ACCOUNT);
    } else {
      await router.push(Links.SIGN_IN);
    }
  }

  async function handleSignOut(): Promise<void> {
    await login.signOut();
  }

  //* -------------------------------------------------
  // Render
  return (
    <React.Fragment>
      { login.status === 'signed-in'
        ? <React.Fragment>
            <DesktopNavbarTabButton
                startIcon={<FaceTwoTone />}
                onClick={handleMyAccountClick}>
                My Account
              </DesktopNavbarTabButton>
              <DesktopNavbarTabButton onClick={handleSignOut}>
                Sign Out
              </DesktopNavbarTabButton>
          </React.Fragment>
        : <DesktopNavbarTabButton
            startIcon={<FaceTwoTone />}
            onClick={handleMyAccountClick}>
            My Account
          </DesktopNavbarTabButton>}
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
