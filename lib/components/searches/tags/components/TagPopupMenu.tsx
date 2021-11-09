import React from 'react';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';
import { ProductPropertyOptions } from 'models/product/types';
import { Id } from 'utils/keys';

import tagNames from 'data/tags.json';
import { useProducts } from 'models/product/useProducts';

import TagMenu from '../styles/TagMenu';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

type Props = {
  anchorEl: null | HTMLElement;
  menuClose: () => void;
};

const TagPopupMenu: React.FunctionComponent<Props> = ({
  anchorEl,
  menuClose,
}): JSX.Element => {
  const router = useRouter();
  const ui = useAppSelector(uiSelector);

  //* -------------------------------------------------
  // Handlers

  function handleTagClick(tag: string): void {
    menuClose();
    router.push(`/products/${tag.replace(/[' ']/g, '-').toLowerCase()}`);
  }

  return (
    <TagMenu
      id={Id.NAVBAR_SEARCH_MENU}
      anchorEl={anchorEl}
      open={ui.navbar.tagMenuOpen}
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
      PaperProps={{
        style: {
          maxHeight: '275px',
          width: '15ch',
        },
      }}
      transitionDuration={300}
      MenuListProps={{ onMouseLeave: menuClose }}>
      <Typography
        variant="h3"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          margin: '.5rem 16px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>
        {'Search'}
      </Typography>
      {tagNames.sort().map((tag: string, index: number) => (
        <Box key={index}>
          <MenuItem
            onClick={() => handleTagClick(tag)}
            sx={{ fontSize: '1rem' }}>
            {tag}
          </MenuItem>
          <Divider
            sx={{ width: '80%', marginRight: 'auto', marginLeft: '10px' }}
          />
        </Box>
      ))}
    </TagMenu>
  );
};

export default TagPopupMenu;
