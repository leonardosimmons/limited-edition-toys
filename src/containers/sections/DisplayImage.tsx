import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const DisplayImage = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '250px',
  height: '200px',
  margin: '10px auto',
  borderRadius: '10px',
  ...theme.custom?.centerColumn,
  [theme.breakpoints.up('mobileMd')]: {
    width: '300px',
    height: '255px',
  },
  [theme.breakpoints.up('tabletSm')]: {
    width: '500px',
    height: '285px',
    marginBottom: '3rem',
  },
  [theme.breakpoints.up('tabletLg')]: {
    width: '500px',
    height: '325px',
  },
  '& > span': {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& > img': {
      margin: '0 auto',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
  },
}));
