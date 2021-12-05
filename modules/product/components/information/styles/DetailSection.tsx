import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';

export const ProductDetailSection = styled(Grid)<GridProps>(({ theme }) => ({
  '& > div': {
    ...theme.custom?.center,
    [theme.breakpoints.up('tabletLg')]: {
      justifyContent: 'flex-start',
    },
  },
  '& > div:nth-of-type(1)': {
    width: '90%',
    margin: '0 auto',
    [theme.breakpoints.up('tabletLg')]: {
      width: '90%',
      margin: '0 auto',
      ...theme.mixins.toolbar,
    },
    '& > h2.MuiTypography-h2': {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      textAlign: 'center',
      letterSpacing: 1.2,
      [theme.breakpoints.up('tabletLg')]: {
        textAlign: 'left',
        fontSize: '1.8rem',
      },
      [theme.breakpoints.up('desktopSm')]: {
        marginTop: '2rem',
        fontSize: '3rem',
      },
    },
  },
  '& > div:nth-of-type(2)': {
    marginTop: '10px',
    ...theme.custom?.centerColumn,
    [theme.breakpoints.up('tabletLg')]: {
      flexDirection: 'row',
    },
    '& div.MuiContainer-root': {
      ...theme.custom?.center,
      [theme.breakpoints.up('tabletLg')]: {
        flex: 0,
        width: '90%',
        justifyContent: 'flex-start',
      },
      '& > span.MuiRating-root': {
        fontSize: '2rem',
        [theme.breakpoints.up('tabletLg')]: {
          marginLeft: '10px',
        },
      },
    },
    '& span.MuiTypography-caption': {
      margin: '5px 0',
      fontSize: '.9rem',
      [theme.breakpoints.up('tabletLg')]: {
        flex: 1,
      },
      [theme.breakpoints.up('desktopSm')]: {
        fontSize: '1rem',
      },
    },
  },
  '& > div:nth-of-type(3)': {
    [theme.breakpoints.up('tabletLg')]: {
      width: '90%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    '& span.MuiTypography-body1': {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      margin: '2rem 0',
      lineSpacing: 1.2,
    },
  },
}));
