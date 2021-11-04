import React from 'react';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';
import { ProductPropertyOptions } from 'models/product/types';
import { Id } from 'utils/keys';

import { useProducts } from 'models/product/useProducts';

import TagMenu from '../styles/TagMenu';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type Props = {
  anchorEl: null | HTMLElement;
  menuClose: () => void;
};

const CategoryPopupMenu: React.FunctionComponent<Props> = ({
  anchorEl,
  menuClose,
}): JSX.Element => {
  const ui = useAppSelector(uiSelector);
  const { tags } = useProducts();

  const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    // go to selected category page
  };

  return (
    <TagMenu
      id={Id.NAVBAR_SEARCH_MENU}
      anchorEl={anchorEl}
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
      {tags &&
        tags.list?.map((t: ProductPropertyOptions, index: number) => (
          <Box key={index}>
            <MenuItem onClick={handleMenuItemClick} sx={{ fontSize: '1rem' }}>
              {tags.status === 'loading' ? '...' : t.name}
            </MenuItem>
            <Divider
              sx={{ width: '80%', marginRight: 'auto', marginLeft: '10px' }}
            />
          </Box>
        ))}
    </TagMenu>
  );
};

export default CategoryPopupMenu;
