import React from 'react';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';
import { ProductPropertyOptions } from 'models/product/types';
import { Id } from 'utils/keys';

import { useProductTags } from 'models/product/queries';

import { useTagSearchStyles } from '../TagSearchStyles';

import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

type Props = {
  anchorEl: null | HTMLElement;
  menuClose: () => void;
};

const CategoryPopupMenu: React.FunctionComponent<Props> = ({
  anchorEl,
  menuClose,
}): JSX.Element => {
  const styles = useTagSearchStyles();
  const ui = useAppSelector(uiSelector);
  const { status, data: tags, error } = useProductTags();

  const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    // go to selected category page
  };

  return (
    <Menu
      id={Id.NAVBAR_SEARCH_MENU}
      anchorEl={anchorEl}
      getContentAnchorEl={undefined}
      open={ui.navbar.searchMenuOpen}
      elevation={1}
      onClose={menuClose}
      anchorOrigin={
        (ui.status.viewport === 'desktop' && {
          vertical: 'bottom',
          horizontal: 'right',
        }) ||
        undefined
      }
      transformOrigin={
        (ui.status.viewport === 'desktop' && {
          vertical: 'top',
          horizontal: 'center',
        }) ||
        undefined
      }
      classes={{ paper: styles.menu }}
      PaperProps={{
        style: {
          maxHeight: 48 * 5.5,
          width: '15ch',
        },
      }}
      transitionDuration={300}
      MenuListProps={{ onMouseLeave: menuClose }}>
      <Typography variant="h3" className={styles.menuTitle}>
        {'Search'}
      </Typography>
      {tags &&
        tags.map((t: ProductPropertyOptions, index: number) => (
          <Box key={index}>
            <MenuItem className={styles.menuItem} onClick={handleMenuItemClick}>
              {status === 'loading' ? '...' : t.name}
            </MenuItem>
            <Divider className={styles.tabDivider} />
          </Box>
        ))}
    </Menu>
  );
};

export default CategoryPopupMenu;