import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
import Button, { ButtonProps } from '@mui/material/Button';

export const ProductActionMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  ...theme.custom.center,
  marginBottom: '40px',
  [theme.breakpoints.up('mobileMd')]: {
    width: '90%',
    margin: '0 auto',
    marginBottom: '40px',
  },
  [theme.breakpoints.up('mobileLg')]: {
    width: '65%',
  },
  [theme.breakpoints.up('tabletSm')]: {
    width: '45%',
  },
  [theme.breakpoints.up('tabletLg')]: {
    width: '90%',
    justifyContent: 'flex-start',
  },
  '& > div.MuiGrid-item': {
    width: '150px',
    ...theme.custom.center,
    [theme.breakpoints.up('mobileMd')]: {
      alignItems: 'flex-start',
    },
  },
  '& > div.MuiGrid-item:nth-of-type(1)': {
    [theme.breakpoints.up('tabletLg')]: {
      flex: 0,
    },
    '& > div.MuiGrid-root:nth-of-type(1) > span.MuiTypography-caption': {
      fontSize: '.9rem',
    },
    '& > div.MuiGrid-root:nth-of-type(2)': {
      width: '150px',
      ...theme.custom.center,
      [theme.breakpoints.up('mobileMd')]: {
        justifyContent: 'flex-start',
      },
    },
  },
  '& > div.MuiGrid-item:nth-of-type(2)': {
    //flex: 1,
    width: '150px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '& > div.MuiBox-root': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      [theme.breakpoints.up('tabletLg')]: {
        alignItems: 'flex-start',
      },
      '& > div': {
        height: '40px',
        width: '100%',
      },
      '& > button.MuiButton-root': {
        borderRadius: '10px',
        fontSize: '.9rem',
        letterSpacing: 1.2,
        margin: '0 auto',
        [theme.breakpoints.up('mobileMd')]: {
          margin: 0,
          fontSize: '1rem',
        },
      },
    },
  },
}));

export const ProductAmountButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: 0,
  margin: '0 1rem',
  padding: '0px 10px',
  fontSize: '1.2rem',
  '&:active': {
    ...theme.custom.actions.clicked,
  },
  [theme.breakpoints.up('mobileMd')]: {
    padding: '3px 15px',
  },
  '&:nth-of-type(1)': {
    marginLeft: 0,
  },
  '&:nth-of-type(2)': {
    marginRight: 0,
  },
}));
