import React from 'react';

import { useMobileMenuStyles } from '../MobileMenuStyles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FaceIcon from '@material-ui/icons/Face';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';

const MobileMenuList: React.FunctionComponent = (): JSX.Element => {
  const styles = useMobileMenuStyles();

  return (
    <List disablePadding className={styles.list}>
      <ListItem button component={NextLinkComposed} to={'/'}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Wishlist"
          primaryTypographyProps={{ variant: 'h4' }}
          className={styles.listText}
        />
      </ListItem>
      <ListItem button component={NextLinkComposed} to={'/'}>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="My Account"
          primaryTypographyProps={{ variant: 'h4' }}
          className={styles.listText}
        />
      </ListItem>
    </List>
  );
};

export default MobileMenuList;
