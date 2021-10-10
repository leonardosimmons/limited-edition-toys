import React from 'react';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import { Id } from 'utils/keys';

import { useSearchBarStyles } from '../SearchBarStyles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';

type Props = {
  anchorEl: null | HTMLElement;
  open: boolean;
  menuClose: () => void;
};

const CategoryPopupMenu: React.FunctionComponent<Props> = ({
  anchorEl,
  open,
  menuClose,
}): JSX.Element => {
  const styles = useSearchBarStyles();
  const ui = useAppSelector(uiSelector);

  const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    // fetch selected category(s) from db
  };

  return (
    <Menu
      id={Id.NAVBAR_SEARCH_MENU}
      anchorEl={anchorEl}
      getContentAnchorEl={undefined}
      open={open}
      elevation={4}
      onClose={menuClose}
      anchorOrigin={
        ui.status.isMobile
          ? undefined
          : { vertical: 'bottom', horizontal: 'right' }
      }
      transformOrigin={
        ui.status.isMobile
          ? undefined
          : { vertical: 'top', horizontal: 'center' }
      }
      classes={{ paper: styles.menu }}
      PaperProps={{
        style: {
          maxHeight: 48 * 4.5,
          width: '15ch',
        },
      }}
      MenuListProps={{ onMouseLeave: menuClose }}>
      <Typography variant="h3" className={styles.menuTitle}>
        Categories
      </Typography>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
      <Divider />
      <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
        Test Row One
      </MenuItem>
    </Menu>
  );
};

export default CategoryPopupMenu;
