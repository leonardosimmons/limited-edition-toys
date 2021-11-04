import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';

export const ProductDisplayActionGrid = styled(Grid)<GridProps>(
  ({ theme }) => ({
    marginTop: '10px',
    marginBottom: '20px',
    padding: '.25rem 1rem',
    ...theme.custom?.centerColumn,
    [theme.breakpoints.up('mobileMd')]: {
      flexDirection: 'row',
    },
    '& > div:nth-of-type(1)': {
      flex: 1,
      alignSelf: 'flex-start',
      marginLeft: '1rem',
      fontSize: '1rem',
      [theme.breakpoints.up('mobileMd')]: {
        flex: '0 1 40%',
        alignSelf: 'center',
      },
      [theme.breakpoints.up('tabletSm')]: {
        fontSize: '1rem',
      },
    },
    '& > div:nth-of-type(2)': {
      flex: 1,
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5px',
      borderRadius: '10px',
      backgroundColor: theme.palette.secondary.main,
      '& > button.MuiButton-root': {
        minWidth: 0,
        width: '100%',
        fontSize: '.8rem',
        textAlign: 'center',
        padding: '5px 5px',
        borderRadius: '10px',
        //color: 'black',
        [theme.breakpoints.up('tabletSm')]: {
          fontSize: '1rem',
        },
      },
    },
  }),
);
