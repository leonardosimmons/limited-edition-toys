import React from 'react';
import { useRouter } from 'next/router';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import { Links } from 'utils/keys';

import { useLogin } from 'modules/auth/hooks/useLogin';

import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText';

import FaceIcon from '@mui/icons-material/Face';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

const ListText = styled(ListItemText)<ListItemTextProps>(({ theme }) => ({
  fontSize: '1rem',
  fontFamily: 'Jost, sans-serif',
  fontWeight: 700,
  letterSpacing: 1.6,
  color: theme.palette.grey[700],
}));

const MobileMenuList: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const login = useLogin();

  React.useEffect(() => {
    if (login.status === 'guest') {
      router.push(Links.SIGN_IN)
    }
  }, [login.status]);

  function handleMyAccountClick(): void {
    if (login.status === 'signed-in') {
      router.push(Links.ACCOUNT);
    } else {
      router.push(Links.SIGN_IN);
    }
  }

  async function handleSignOut(): Promise<void> {
    await login.signOut();
  }

  return (
    <List disablePadding sx={{ flex: 1, marginTop: '2rem' }}>
      {login.status === 'signed-in'
        ? <React.Fragment>
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
            <ListItem
              button
              component={NextLinkComposed}
              to={Links.SIGN_IN}
              onClick={handleSignOut}>
              <ListItemIcon>
                <LogoutTwoToneIcon />
              </ListItemIcon>
              <ListText
                disableTypography
                primary="Sign Out"
                primaryTypographyProps={{ variant: 'h4' }}
              />
            </ListItem>
          </React.Fragment>
        : <ListItem
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
      }
    </List>
  );
};

export default MobileMenuList;
