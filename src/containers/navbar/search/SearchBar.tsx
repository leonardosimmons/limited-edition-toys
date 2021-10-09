import React from 'react';

import { useSearchBarStyles } from './SearchBarStyles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar: React.FunctionComponent = (): JSX.Element => {
  const styles = useSearchBarStyles();

  return (
    <Paper component="form" className={styles.searchBar}>
      <IconButton aria-label="product category menu" className={styles.icon}>
        <MenuIcon />
      </IconButton>
      <Divider className={styles.divider} orientation="vertical" />
      <InputBase
        placeholder="Search Products"
        className={styles.searchInput}
        inputProps={{ 'aria-label': 'search product categories' }}
      />
      <IconButton type="submit" aria-label="search" className={styles.icon}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
