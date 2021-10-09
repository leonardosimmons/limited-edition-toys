import React from 'react';

import { useMobileMenuStyles } from './MobileMenuStyles';

import Image from 'next/Image';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';

import MobileMenuList from './components/MobileMenuList';
import MobileMenuTabs from './components/MobileMenuTabs';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  closeNavbarMobileMenu,
  openNavbarMobileMenu,
  uiSelector,
} from 'src/redux/models/ui';

type Props = {};

const MobileMenu: React.FunctionComponent<Props> = (): JSX.Element => {
  const styles = useMobileMenuStyles();
  const dispatch = useAppDispatch();
  const status = useAppSelector(uiSelector);
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
      <SwipeableDrawer
        anchor="right"
        open={status.navbar.mobileMenuOpen}
        onOpen={handleDrawerToggle(true)}
        onClose={handleDrawerToggle(false)}
        classes={{ paper: styles.menuDrawer }}>
        <Box className={styles.promoBox}>
          <Image
            src={'/images/logo-1.png'}
            alt="Logo"
            width={135}
            height={135}
          />
        </Box>
        <MobileMenuList />
        <Typography variant="caption" className={styles.copyright}>
          {'© Limited Edition Toys - 2021'}
        </Typography>
      </SwipeableDrawer>
      <MobileMenuTabs drawerToggle={handleDrawerToggle} />
    </React.Fragment>
  );
};

export default MobileMenu;
