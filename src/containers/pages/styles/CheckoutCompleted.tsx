import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';

export const CompletedMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    '& > p.MuiTypography-body1': {
      width: '100%',
      ...theme.custom.center,
      padding: '2rem',
      textAlign: 'center',
      fontSize: '1rem',
      [theme.breakpoints.up('mobileMd')]: {
        fontSize: '1.1rem'
      },
      [theme.breakpoints.up('tabletSm')]: {
        fontSize: '1.2rem',
      },
      [theme.breakpoints.up('tabletLg')]: {
        width: '900px',
        padding: '3rem 2rem 4rem',
      },
      [theme.breakpoints.up('desktopLg')]: {
        padding: '4.5rem 3rem 6rem',
        fontSize: '1.4rem'
      },
    }
  }),
);

export const CompletedTopBanner = styled(Box)<BoxProps>(({ theme }) => ({
  height: '85px',
  width: '100%',
  backgroundColor: 'green',
  ...theme.custom.center,
  '& > svg.MuiSvgIcon-root': {
    height: '.7em',
    width: '.7em',
    color: 'white',
    [theme.breakpoints.up('mobileMd')]: {
      height: '.8em',
      width: '.8em',
      marginBottom: '5px',
    },
  },
  '& > span.MuiTypography-caption': {
    marginLeft: '10px',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Jost',
    fontWeight: '300',
    [theme.breakpoints.up('mobileMd')]: {},
  },
}));

export const ConfirmationBanner = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100px',
  width: '85%',
  borderBottom: `2.5px solid ${theme.palette.grey[200]}`,
  ...theme.custom.center,
  '& > h1.MuiTypography-h1': {
    fontSize: '2.5rem',
    fontWeight: 200,
    color: theme.palette.grey[700],
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('desktopSm')]: {
      fontSize: '3.25rem',
    },
    [theme.breakpoints.up('desktopLg')]: {
      fontSize: '3.65rem'
    },
  },
}));
