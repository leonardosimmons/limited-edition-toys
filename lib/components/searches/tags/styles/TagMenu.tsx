import { styled } from '@mui/material/styles';

import Menu, { MenuProps } from '@mui/material/Menu';

const TagMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: theme.zIndex.modal + 2,
  '& > ul.MuiList-root': {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  '& ul div li.MuiMenuItem-root': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '20px',
    padding: 0,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    [theme.breakpoints.up(600)]: {
      padding: '.5rem 0',
    },
  },
}));

export default TagMenu;
