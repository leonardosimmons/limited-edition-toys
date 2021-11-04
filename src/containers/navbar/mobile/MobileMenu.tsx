import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  closeNavbarMobileMenu,
  uiSelector,
  openNavbarMobileMenu,
} from 'src/redux/models/ui';

import MobileDrawer from './styles/MobileDrawer';
import MobilePromotionalBox from './styles/MobilePromotionalDrawer';
import MobileCopyright from './styles/MobileCopyright';

import Image from 'next/image';

import MobileMenuList from './components/MobileMenuList';
import MobileMenuTabs from './components/MobileMenuTabs';

const MobileMenu: React.FunctionComponent = (): JSX.Element => {
  const ui = useAppSelector(uiSelector);
  const dispatch = useAppDispatch();

  // Drawer --------------------
  const handleDrawerToggle =
    (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      if (
        e &&
        e.type === 'keydown' &&
        ((e as React.KeyboardEvent).key === 'Tab' ||
          (e as React.KeyboardEvent).key === 'shift')
      ) {
        return;
      }

      if (open) {
        dispatch(openNavbarMobileMenu());
        return;
      }
      dispatch(closeNavbarMobileMenu());
    };

  return (
    <React.Fragment>
      <MobileDrawer
        anchor="right"
        open={ui.navbar.mobileMenuOpen}
        onOpen={handleDrawerToggle(true)}
        onClose={handleDrawerToggle(false)}>
        <MobilePromotionalBox>
          <Image
            src={'/images/logo-1.png'}
            alt="Logo"
            width={135}
            height={135}
          />
        </MobilePromotionalBox>
        <MobileMenuList />
        <MobileCopyright variant="caption">
          {'© Limited Edition Toys - 2021'}
        </MobileCopyright>
      </MobileDrawer>
      <MobileMenuTabs drawerToggle={handleDrawerToggle} />
    </React.Fragment>
  );
};

export default MobileMenu;
