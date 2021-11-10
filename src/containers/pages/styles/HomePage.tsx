import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';

export const HomePageMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    minHeight: '70vh', // temp
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    justifyContent: 'flex-start',
    '& > div.MuiContainer-root:nth-of-type(2)': {
      marginTop: '100px',
      [theme.breakpoints.up('desktopSm')]: {
        marginTop: '200px',
      },
    },
    '& > div:nth-of-type(4)': {
      maxWidth: '1850px',
    },
    '& > div.MuiContainer-root:nth-of-type(5)': {
      marginTop: '100px',
      [theme.breakpoints.up('desktopSm')]: {
        marginTop: '200px',
      },
    },
  }),
);
