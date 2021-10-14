import React from 'react';
import { menuTabs, MenuTabs } from 'data/navbar-categories';

import { useCategorySearchStyles } from './CategorySearchStyles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import CategoryPopupMenu from 'src/models/product/components/searches/categories/components/CategoryPopupMenu';
import { useAppDispatch } from 'src/redux';
import {
  closeCategorySearchMenu,
  openCategorySearchMenu,
} from 'src/redux/models/ui';

const CategorySearchBar: React.FunctionComponent = (): JSX.Element => {
  const styles = useCategorySearchStyles();
  const dispatch = useAppDispatch();

  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  function handleTabChange(e: React.ChangeEvent<any>, newValue: number): void {
    setActiveIndex(newValue);
  }

  // ----------------------------------------------------------------

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleMenuClose(): void {
    setAnchorEl(null);
    dispatch(closeCategorySearchMenu());
  }

  function handleMenuOpen(
    e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  ): void {
    setAnchorEl(e.currentTarget);
    dispatch(openCategorySearchMenu());
  }

  return (
    <React.Fragment>
      <Paper className={styles.mainContainer}>
        <Tabs
          value={activeIndex || false}
          className={styles.tabs}
          onChange={handleTabChange}>
          {menuTabs.map((tab: MenuTabs, index: number) => (
            <Tab
              key={index}
              to={tab.link}
              component={NextLinkComposed}
              value={tab.index}
              label={tab.name}
              className={styles.tab}
              aria-haspopup={tab.ariaPopup}
              onMouseOver={handleMenuOpen}
            />
          ))}
        </Tabs>
      </Paper>
      <CategoryPopupMenu anchorEl={anchorEl} menuClose={handleMenuClose} />
    </React.Fragment>
  );
};

export default CategorySearchBar;
