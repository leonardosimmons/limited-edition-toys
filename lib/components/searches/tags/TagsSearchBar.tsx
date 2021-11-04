import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  closeNavbarSearchMenu,
  openNavbarSearchMenu,
  uiSelector,
} from 'src/redux/models/ui';
import { Id } from 'utils/keys';

import TagSearchBar from './styles/TagSearchBar';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import TagPopupMenu from './components/TagPopupMenu';

const TagsSearchBar: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const ui = useAppSelector(uiSelector);

  // Menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleMenuClose(): void {
    setAnchorEl(null);
    dispatch(closeNavbarSearchMenu());
  }

  function handleMenuOpen(
    e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  ): void {
    setAnchorEl(e.currentTarget);
    dispatch(openNavbarSearchMenu());
  }

  // Search --------------------
  const [searchString, setSearchString] = React.useState<string>('');

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchString(e.target.value);
    // [UI/UX]: api calls to db to check matching product
    // include dropdown preview window displaying matching products
    // BONUS: use regex to parse input
  }

  function handleEnteredSearch(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    // load product category/tag page with matching search
    // display error if nothing matches
  }

  return (
    <React.Fragment>
      <TagSearchBar>
        <IconButton
          id={Id.NAVBAR_SEARCH_MENU}
          aria-label="product category menu"
          onBlur={handleMenuClose}
          onFocus={handleMenuOpen}
          onMouseOver={handleMenuOpen}
          aria-owns={Id.NAVBAR_SEARCH_MENU}
          aria-controls={Id.NAVBAR_SEARCH_MENU}
          aria-expanded={ui.navbar.searchMenuOpen ? 'true' : undefined}>
          <MenuIcon />
        </IconButton>
        <Divider orientation="vertical" />
        <InputBase
          placeholder="Search Products"
          value={searchString}
          sx={{ flex: 1 }}
          inputProps={{
            'aria-label': 'search product categories',
          }}
          onChange={handleUserInput}
        />
        <IconButton
          type="submit"
          aria-label="search"
          disableRipple
          className={'.Mui-focusVisible'}
          onClick={handleEnteredSearch}>
          <SearchIcon />
        </IconButton>
      </TagSearchBar>
      <TagPopupMenu anchorEl={anchorEl} menuClose={handleMenuClose} />
    </React.Fragment>
  );
};

export default TagsSearchBar;
