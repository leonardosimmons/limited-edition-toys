import React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'src/redux';
import { productCategories } from 'data/navbar-categories';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import { MenuTab } from 'utils/types';
import {
  closeCategorySearchMenu,
  openCategorySearchMenu,
} from 'src/redux/models/ui';

import CategoryBar from './styles/CategoryBar';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CategoryPopupMenu from 'lib/components/searches/categories/components/CategoryPopupMenu';

const CategorySearchBar: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  React.useEffect(() => {
    const slug = window.location.pathname;
    productCategories.forEach((category: MenuTab) => {
      switch (slug) {
        case `${category.link}`:
          if (activeIndex !== category.index) {
            setActiveIndex(category.index as number);
          }
        default:
          break;
      }
    });
    return () => {
      setActiveIndex(null);
    };
  }, []);

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

  function handleTabClick(link: string) {
    router.push(link);
  }

  return (
    <React.Fragment>
      <CategoryBar>
        <Tabs
          selectionFollowsFocus
          value={
            activeIndex !== null && activeIndex >= 0
              ? activeIndex
              : false || false
          }
          onChange={handleTabChange}>
          {productCategories.map((tab: MenuTab, index: number) => (
            <Tab
              key={index}
              to={tab.link}
              component={NextLinkComposed}
              value={tab.index}
              label={tab.name}
              sx={{ minWidth: 0, padding: 0, margin: '0 .5rem' }}
              //aria-haspopup={tab.ariaPopup}
              onMouseOver={handleMenuOpen}
              onClick={() => handleTabClick(tab.link)}
            />
          ))}
        </Tabs>
      </CategoryBar>
      {/* <CategoryPopupMenu anchorEl={anchorEl} menuClose={handleMenuClose} /> */}
    </React.Fragment>
  );
};

export default CategorySearchBar;
