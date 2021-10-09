import React from 'react';

import { useMobileMenuStyles } from './MobileMenuStyles';

import Image from 'next/Image';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';

import MobileMenuList from './components/MobileMenuList';
import MobileMenuTabs from './components/MobileMenuTabs';

type Props = {};

const MobileMenu: React.FunctionComponent<Props> = (): JSX.Element => {
  const styles = useMobileMenuStyles();

  // Drawer --------------------
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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

      setIsOpen(open);
    };

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
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
