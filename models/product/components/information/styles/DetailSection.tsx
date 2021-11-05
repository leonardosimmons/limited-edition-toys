import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';

export const ProductDetailSection = styled(Grid)<GridProps>(({ theme }) => ({
  '& > div': {
    ...theme.custom?.center,
  },
  '& > div:nth-of-type(1)': {
    '& > h2.MuiTypography-h2': {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      textAlign: 'center',
      letterSpacing: 1.2,
    },
  },
  '& > div:nth-of-type(2)': {
    marginTop: '10px',
    ...theme.custom?.centerColumn,
    '& div.MuiContainer-root': {
      ...theme.custom?.center,
      '& > span.MuiRating-root': {
        fontSize: '2rem',
      },
    },
    '& span.MuiTypography-caption': {
      margin: '5px 0',
      fontSize: '.9rem',
      [theme.breakpoints.up('desktopSm')]: {
        fontSize: '1rem',
      },
    },
  },
  '& > div:nth-of-type(3)': {
    '& span.MuiTypography-body1': {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      margin: '2rem 0',
      lineSpacing: 1.2,
    },
  },
}));
