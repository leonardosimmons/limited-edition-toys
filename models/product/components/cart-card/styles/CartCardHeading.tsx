import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const CartCardHeading = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  ...theme.custom.center,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  '& > h2.MuiTypography-h2': {
    flex: '1',
    width: '100%',
    padding: '1rem',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
}));

export const CartCardImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  height: '116px',
  width: '116px',
  margin: '10px',
  marginRight: 'auto',
  borderRadius: '10px',
  ...theme.custom?.centerColumn,
  alignItems: 'flex-start',
  backgroundColor: theme.palette.grey[200],
  [theme.breakpoints.up('mobileMd')]: {
    padding: '.5rem',
  },
  '& > span': {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& > img': {
      margin: '0 auto',
      borderRadius: '10px',
      transition: 'all .5s',
      '&:hover': {
        cursor: 'pointer',
        transform: 'translateY(-2px)',
      },
      '&:active': {
        ...theme.custom?.actions?.clicked,
      },
    },
  },
}));
