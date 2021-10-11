import React from 'react';

import { useSearchBarStyles } from './SearchBarStyles';
import { Id } from 'utils/keys';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CategoryPopupMenu from './components/CategoryPopupMenu';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  closeNavbarSearchMenu,
  openNavbarSearchMenu,
  uiSelector,
} from 'src/redux/models/ui';

const SearchBar: React.FunctionComponent = (): JSX.Element => {
  const styles = useSearchBarStyles();
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
      <Paper component="form" className={styles.searchBar}>
        <IconButton
          id={Id.NAVBAR_SEARCH_MENU}
          aria-label="product category menu"
          className={styles.icon}
          onBlur={handleMenuClose}
          onFocus={handleMenuOpen}
          onMouseOver={handleMenuOpen}
          aria-owns={Id.NAVBAR_SEARCH_MENU}
          aria-controls={Id.NAVBAR_SEARCH_MENU}
          aria-expanded={ui.navbar.searchMenuOpen ? 'true' : undefined}>
          <MenuIcon />
        </IconButton>
        <Divider className={styles.divider} orientation="vertical" />
        <InputBase
          placeholder="Search Products"
          value={searchString}
          className={styles.searchInput}
          inputProps={{
            'aria-label': 'search product categories',
          }}
          onChange={handleUserInput}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={styles.icon}
          onClick={handleEnteredSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <CategoryPopupMenu anchorEl={anchorEl} menuClose={handleMenuClose} />
    </React.Fragment>
  );
};

export default SearchBar;
