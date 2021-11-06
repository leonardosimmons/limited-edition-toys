import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';

export const ProductInformationSection = styled(Grid)<GridProps>(
  ({ theme }) => ({
    '& > div.MuiGrid-item:nth-of-type(3)': {
      width: '100%',
      margin: '0 auto',
      marginTop: '20px',
      ...theme.custom.centerColumn,
      [theme.breakpoints.up('mobileLg')]: {
        width: '85%',
      },
      [theme.breakpoints.up('tabletSm')]: {
        width: '65%',
      },
      '& > h3.MuiTypography-h3': {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1.2,
      },
      '& > p.MuiTypography-body1': {
        margin: '1rem 0',
        fontSize: '1rem',
        fontFamily: 'Raleway, sans-serif',
        textAlign: 'center',
        letterSpacing: 1.2,
      },
    },

    '& > div.MuiGrid-item:nth-of-type(4)': {
      width: '100%',
      margin: '0 auto',
      marginTop: '80px',
      padding: '0 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('mobileLg')]: {
        width: '85%',
      },
      [theme.breakpoints.up('tabletSm')]: {
        width: '65%',
      },
      '& > h3.MuiTypography-h3': {
        fontSize: '1.2rem',
      },
      '& > div.MuiBox-root': {
        margin: '0 auto',
        '& > a': {
          marginRight: '5px',
          fontSize: '1rem',
          lineHeight: 1,
        },
      },
    },

    '& > div.MuiGrid-item:nth-of-type(5)': {
      marginTop: '50px',
      padding: '0 10px',
      ...theme.custom.center,
      '& > h3.MuiTypography-h3': {
        fontSize: '1rem',
        marginRight: '10px',
      },
      '& > svg.MuiSvgIcon-root': {
        marginRight: '5px',
      },
    },
  }),
);
