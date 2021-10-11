import React from 'react';
import { Id } from 'utils/keys';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

import { useSearchBarStyles } from './SearchBarStyles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import PopupMenu from './components/PopupMenu';

type Props = {
  isMenuOpen: boolean;
  open: ActionCreatorWithoutPayload<any>;
  close: ActionCreatorWithoutPayload<any>;
  dispatch: ThunkDispatch<any, any, any> &
    ThunkDispatch<any, any, any> &
    Dispatch<any>;
  placeholder?: string;
};

const SearchBar: React.FunctionComponent<Props> = ({
  open,
  close,
  isMenuOpen,
  dispatch,
  placeholder,
}): JSX.Element => {
  const styles = useSearchBarStyles();

  // Menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleMenuClose(): void {
    setAnchorEl(null);
    dispatch(close());
  }

  function handleMenuOpen(
    e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  ): void {
    setAnchorEl(e.currentTarget);
    dispatch(open());
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
          className={styles.icon}
          classes={{ root: styles.menuIcon }}
          onBlur={handleMenuClose}
          onFocus={handleMenuOpen}
          onMouseOver={handleMenuOpen}
          aria-owns={Id.NAVBAR_SEARCH_MENU}
          aria-controls={Id.NAVBAR_SEARCH_MENU}
          aria-expanded={isMenuOpen ? 'true' : undefined}>
          <MenuIcon />
        </IconButton>
        <Divider className={styles.divider} orientation="vertical" />
        <InputBase
          placeholder={placeholder ?? undefined}
          value={searchString}
          className={styles.searchInput}
          onChange={handleUserInput}
        />
        <IconButton
          type="submit"
          aria-label="search"
          disableRipple
          className={`${styles.icon} ${styles.searchIcon} .Mui-focusVisible`}
          onClick={handleEnteredSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <PopupMenu anchorEl={anchorEl} menuClose={handleMenuClose} />
    </React.Fragment>
  );
};

export default SearchBar;
