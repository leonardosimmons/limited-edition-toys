import React from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  closeNavbarSearchMenu,
  closeNavbarTagMenu,
  openNavbarSearchMenu,
  openNavbarTagMenu,
  uiSelector,
} from 'src/redux/models/ui';
import { VendProduct } from 'modules/product/types';
import { Id } from 'utils/keys';

import { useProducts } from 'modules/product/useProducts';
import { searchSelector } from 'src/redux/models/search/selectors';
import {
  setCurrentSearchInput,
  setSearchRequest,
  setSearchResult,
} from 'src/redux/models/search/actions';

import TagSearchBar from './styles/TagSearchBar';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import TagPopupMenu from './components/TagPopupMenu';

const TagsSearchBar: React.FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { products } = useProducts();
  const ui = useAppSelector(uiSelector);
  const search = useAppSelector(searchSelector);

  //* -------------------------------------------------
  // Tag Menu
  const [tagAnchorEl, setTagAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  function handleTagMenuClose(): void {
    setTagAnchorEl(null);
    dispatch(closeNavbarTagMenu());
  }

  function handleTagMenuOpen(
    e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  ): void {
    setTagAnchorEl(e.currentTarget);
    dispatch(openNavbarTagMenu());
  }

  //* -------------------------------------------------
  // Search Menu
  const [searchBarAnchorEl, setSearchBarAnchorEl] =
    React.useState<null | HTMLElement>(null);

  // filter product according to entered user search
  React.useEffect(() => {
    if (search.input.length > 2) {
      const buffer: VendProduct[] = [];
      products.list?.forEach((product) => {
        if (
          RegExp(search.input.toLowerCase()).test(product.name.toLowerCase())
        ) {
          buffer.push(product);
        }
      });
      dispatch(setSearchResult(buffer));
    }
  }, [search.input]);

  // opens search menu once user starts typing
  React.useEffect(() => {
    if (search.input) {
      dispatch(openNavbarSearchMenu());
    } else if (!search.input) {
      dispatch(closeNavbarTagMenu());
      dispatch(closeNavbarSearchMenu());
    }
  }, [search.input]);

  // automatically redirects once search request has been set
  React.useEffect(() => {
    if (search.request) {
      router.push(`/products/search/${search.request.replace(/[' ']/g, '-')}`);
    }
  }, [search.request]);

  //* -------------------------------------------------
  // Handlers

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(setCurrentSearchInput(e.target.value));
  }

  function handleEnteredSearch(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    dispatch(setSearchRequest(search.input));
    // display error if nothing matches
  }

  //* -------------------------------------------------
  // Render

  return (
    <React.Fragment>
      <TagSearchBar>
        <IconButton
          id={Id.NAVBAR_SEARCH_MENU}
          aria-label="product category menu"
          onBlur={handleTagMenuClose}
          onFocus={handleTagMenuOpen}
          onMouseOver={handleTagMenuOpen}
          aria-owns={Id.NAVBAR_SEARCH_MENU}
          aria-controls={Id.NAVBAR_SEARCH_MENU}
          aria-expanded={ui.navbar.tagMenuOpen ? 'true' : undefined}>
          <MenuIcon />
        </IconButton>
        <Divider orientation="vertical" />
        <InputBase
          placeholder="Search Products"
          value={search.input}
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
      <TagPopupMenu anchorEl={tagAnchorEl} menuClose={handleTagMenuClose} />
    </React.Fragment>
  );
};

export default TagsSearchBar;
