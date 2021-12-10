import React from 'react';
import { useRouter } from 'next/router';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import { Links } from 'utils/keys';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText';

import FaceIcon from '@mui/icons-material/Face';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ListText = styled(ListItemText)<ListItemTextProps>(({ theme }) => ({
  fontSize: '1rem',
  fontFamily: 'Jost, sans-serif',
  fontWeight: 700,
  letterSpacing: 1.6,
  color: theme.palette.grey[700],
}));

const MobileMenuList: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter();

  function handleMyAccountClick(): void {
    router.push(Links.ACCOUNT);
  }
  return (
    <List disablePadding sx={{ flex: 1, marginTop: '2rem' }}>
      {/* <ListItem button component={NextLinkComposed} to={'/'}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListText
          disableTypography
          primary="Wishlist"
          primaryTypographyProps={{ variant: 'h4' }}
        />
      </ListItem> */}
      <ListItem
        button
        component={NextLinkComposed}
        to={'/'}
        onClick={handleMyAccountClick}>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListText
          disableTypography
          primary="My Account"
          primaryTypographyProps={{ variant: 'h4' }}
        />
      </ListItem>
    </List>
  );
};

export default MobileMenuList;
