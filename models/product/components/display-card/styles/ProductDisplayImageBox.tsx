import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const ProductDisplayCardImageBox = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    width: '250px',
    height: '155px',
    margin: '10px auto',
    borderRadius: '10px',
    ...theme.custom?.centerColumn,
    [theme.breakpoints.up('mobileMd')]: {
      height: '185px',
      width: '300px',
    },
    [theme.breakpoints.up('tabletSm')]: {
      width: '300px',
      height: '285px',
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
  }),
);
