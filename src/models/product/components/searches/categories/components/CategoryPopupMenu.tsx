import React from 'react';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import { Id } from 'utils/keys';

import { useCategorySearchStyles } from '../CategorySearchStyles';

import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryListMenu from './CategoryListMenu';
import CategoryProductPreview from './CategoryProductPreview';

type Props = {
  anchorEl: null | HTMLElement;
  menuClose: () => void;
};

const CategoryPopupMenu: React.FunctionComponent<Props> = ({
  anchorEl,
  menuClose,
}): JSX.Element => {
  const styles = useCategorySearchStyles();
  const ui = useAppSelector(uiSelector);

  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  return (
    <Menu
      id={Id.CATEGORY_SEARCH_BAR}
      anchorEl={anchorEl}
      getContentAnchorEl={undefined}
      open={ui.navbar.categoryMenuOpen}
      elevation={2}
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
      transitionDuration={300}
      classes={{ paper: styles.menu }}
      MenuListProps={{ onMouseLeave: menuClose }}>
      <Box className={styles.menuContainer}>
        <CategoryListMenu activeIndex={activeIndex} />
        <Container
          className={styles.productContainer}
          classes={{ root: styles.productContainerRoot }}>
          <CategoryProductPreview />
          <CategoryProductPreview />
          <CategoryProductPreview />
          <CategoryProductPreview />
        </Container>
      </Box>
    </Menu>
  );
};

export default CategoryPopupMenu;
