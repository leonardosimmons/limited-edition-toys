import React from 'react';
import { useRouter } from 'next/router';
import { Images, Links } from 'utils/keys';

import { useAppSelector } from 'src/redux';
import { useViewport } from 'lib/hooks/useViewport';
import { uiSelector } from 'src/redux/models/ui';

import {
  NavbarButton,
  NavbarOffset,
  NavigationBar,
} from './styles/NavigationBar';
import { NavbarPromoBox } from './styles/NavbarPromoBox';
import { NavBarTitle, NavbarTitleBox } from './styles/NavbarTitle';
import { NavbarMenuBox } from './styles/NavbarMenuBox';

import Image from 'next/image';
import Toolbar from '@mui/material/Toolbar';

import ElevationScroll from 'lib/components/ElevationScroll';
import DesktopTabs from './desktop/DesktopTabs';
import MobileMenu from './mobile/MobileMenu';
import TagSearchBar from '../../../lib/components/searches/tags/TagsSearchBar';
import CategorySearchBar from '../../../lib/components/searches/categories/CategorySearchBar';

const AppNavigationBar: React.FunctionComponent = (): JSX.Element => {
  useViewport();
  const router = useRouter();
  const ui = useAppSelector(uiSelector);

  // -------------------------------------------
  function handleLogoClick(): void {
    router.push(Links.HOME);
  }

  return (
    <ElevationScroll>
      <React.Fragment>
        <NavigationBar
          position="fixed"
          aria-label="Main header"
          classes={{
            root: '#fff !important',
            colorPrimary: '#bbdcff !important',
          }}>
          <Toolbar disableGutters sx={{ height: '100%' }}>
            <NavbarPromoBox aria-label="promotional box">
              <Image
                src={Images.NAVBAR_PROMO}
                alt={'promo image'}
                height={100}
                width={200}
                role="img"
              />
            </NavbarPromoBox>
            <NavbarTitleBox onClick={handleLogoClick}>
              <NavbarButton
                disableRipple
                disableTouchRipple
                onClick={handleLogoClick}>
                <NavBarTitle variant="h1" aria-label="Main Heading">
                  <span>{'LIMITED EDITION'}</span>
                  <span>{'Toys'}</span>
                </NavBarTitle>
              </NavbarButton>
              <TagSearchBar />
            </NavbarTitleBox>
            <NavbarMenuBox>
              {ui.status.viewport === 'mobile' ? (
                <MobileMenu />
              ) : (
                <DesktopTabs />
              )}
            </NavbarMenuBox>
          </Toolbar>
        </NavigationBar>
        <NavbarOffset />
        <NavbarOffset />
        {ui.status.viewport === 'desktop' && <CategorySearchBar />}
      </React.Fragment>
    </ElevationScroll>
  );
};

export default AppNavigationBar;
