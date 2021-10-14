import React from 'react';
import { useRouter } from 'next/router';
import { Images, Links } from 'utils/keys';

import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';
import { useViewport } from 'src/helpers/useViewport';

import { useNavbarStyles } from './NavbarStyles';

import Image from 'next/image';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ElevationScroll from 'lib/components/ElevationScroll';
import DesktopTabs from './desktop/DesktopTabs';
import MobileMenu from './mobile/MobileMenu';
import TagSearchBar from 'src/models/product/components/searches/tags';
import CategorySearchBar from 'src/models/product/components/searches/categories/CategorySearchBar';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  useViewport();
  const router = useRouter();
  const ui = useAppSelector(uiSelector);
  const styles = useNavbarStyles();

  // -------------------------------------------
  function handleLogoClick(): void {
    router.push(Links.HOME);
  }

  return (
    <ElevationScroll>
      <React.Fragment>
        <AppBar
          position="fixed"
          aria-label="Main header"
          className={styles.navbar}>
          <Toolbar disableGutters className={styles.toolbar}>
            <Box className={styles.promoBox} aria-label="promotional box">
              <Image
                src={Images.NAVBAR_PROMO}
                alt={'promo image'}
                height={100}
                width={200}
                role="img"
              />
            </Box>
            <Box className={styles.titleBox}>
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
              <TagSearchBar />
            </Box>
            <Box className={styles.menuBox}>
              {ui.status.viewport === 'mobile' ? (
                <MobileMenu />
              ) : (
                <DesktopTabs />
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <div className={styles.navbarOffset} />
        <div className={styles.navbarOffset} />
        {ui.status.viewport === 'desktop' && <CategorySearchBar />}
      </React.Fragment>
    </ElevationScroll>
  );
};

export default Navbar;
