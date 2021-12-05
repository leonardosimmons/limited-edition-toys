import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';

export const ProductDisplayInfoGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  '& > *': {
    padding: '0 20px',
  },
  '& div h6.MuiTypography-h6': {
    fontSize: '1.2rem',
    margin: '0 2px',
    transition: 'all .5s',
    lineSpacing: 1.2,
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  },
  '& div span.MuiTypography-caption': {
    fontSize: '1rem',
    margin: '2px 2px',
  },
  '& > div.MuiGrid-root:nth-of-type(3)': {
    ...theme.custom?.center,
    '& div.MuiContainer-root': {
      flex: '0 1 45%',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      [theme.breakpoints.up('tabletSm')]: {
        flex: '0 1 40%',
      },
      '& svg.MuiSvgIcon-root': {
        fontSize: '1.5rem',
      },
    },
    '& span.MuiTypography-caption': {
      flex: 1,
      fontSize: '.8rem',
    },
  },
}));
