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
  '& > div.MuiGrid-item:nth-of-type(1)': {
    flex: '0 1 45%',
    '& > div.MuiGrid-root:nth-of-type(1) > span.MuiTypography-caption': {
      fontSize: '.9rem',
    },
  },
  '& > div.MuiGrid-item:nth-of-type(2)': {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '& > div.MuiBox-root': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      '& > div': {
        height: '40px',
        width: '100%',
      },
      '& > button.MuiButton-root': {
        borderRadius: '10px',
        fontSize: '.9rem',
        letterSpacing: 1.2,
        [theme.breakpoints.up('mobileMd')]: {
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
