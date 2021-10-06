import React from 'react';
import { useRouter } from 'next/router';
import { Images, Links } from 'utils/keys';

import useNavbarStyles from './NavbarStyles';

import Image from 'next/Image';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DesktopTabs from './desktop/DesktopTabs';
import ElevationScroll from 'lib/components/ElevationScroll';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const styles = useNavbarStyles();
  const desktop = useMediaQuery(theme.breakpoints.up('desktopSm'));

  // -------------------------------------------
  function handleLogoClick(): void {
    router.push(Links.HOME);
  }

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        aria-label="Main header"
        className={styles.navbar}>
        <Toolbar disableGutters>
          {desktop && (
            <Box className={styles.promoBox} aria-label="promotional box">
              <Image
                src={Images.NAVBAR_PROMO}
                alt={'promo image'}
                height={100}
                width={200}
                role="img"
              />
            </Box>
          )}
          <Button
            disableRipple
            onClick={handleLogoClick}
            className={styles.titleButton}>
            <Typography
              variant="h1"
              className={styles.title}
              aria-label="Main Heading">
              <span>{'LIMITED EDITION'}</span>
              <span>{'Toys'}</span>
            </Typography>
          </Button>
          <Box className={styles.menuBox}>
            <DesktopTabs />
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
