import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const CartCardAction = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  ...theme.custom.center,
  '& > button.MuiButton-root': {
    width: '100%',
    fontSize: '.9rem',
    color: theme.palette.grey[700],
    '&:active': {
      ...theme.custom.actions.clicked,
    },
    [theme.breakpoints.up('mobileMd')]: {
      fontSize: '1rem',
    },
  },
  '& > button.MuiButton-root:nth-of-type(1)': {
    borderRight: `.5px solid ${theme.palette.grey[300]}`,
  },
  '& > button.MuiButton-root:nth-of-type(2)': {
    borderLeft: `.5px solid ${theme.palette.grey[300]}`,
  },
}));
