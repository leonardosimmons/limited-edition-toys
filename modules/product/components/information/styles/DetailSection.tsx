import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
interface StyledGridProps extends GridProps {
  discounted?: boolean;
}

export const ProductDetailSection = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'discounted',
})<StyledGridProps>(({ discounted, theme }) => ({
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
    ...theme.custom.centerColumn,
    [theme.breakpoints.up('tabletLg')]: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '0 auto',
    },
    '& span.MuiTypography-body1': {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      margin: '2rem 0',
      letterSpacing: 1.2,
    },
    ...(discounted && {
      '& p.MuiTypography-body1': {
        padding: '2rem 0 .5rem',
        color: 'red',
        fontSize: '1.2rem',
        fontWeight: 'bold',
      },
      '& p.alt-caption': {
        marginBottom: '-2rem',
        padding: '2rem 0 .5rem',
      },
      '& > div.MuiBox-root > span.MuiTypography-body1:nth-of-type(1)': {
        textDecoration: 'line-through solid black',
      },
      '& > div.MuiBox-root > span.MuiTypography-body1:nth-of-type(2)': {
        marginLeft: '15px',
        color: 'red',
        fontSize: '2rem',
      },
    }),
  },
}));
