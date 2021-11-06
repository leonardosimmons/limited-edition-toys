import React from 'react';

import { DesktopNavbarTabButton } from './styles/DesktopNavbarTabButton';
import { DesktopNavbarDivider } from './styles/DesktopNavbarDivider';
import { DesktopNavbarCartIcon } from './styles/DesktopNavbarCartIcon';

import FaceTwoTone from '@mui/icons-material/FaceTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

type Props = {};

const DesktopTabs: React.FunctionComponent<Props> = (): JSX.Element => {
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
      <DesktopNavbarCartIcon aria-label="shopping cart" size="small">
        <ShoppingCartTwoToneIcon fontSize="inherit" />
      </DesktopNavbarCartIcon>
    </React.Fragment>
  );
};

export default DesktopTabs;
