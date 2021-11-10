import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const MainHeaderOneHeading = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '90%',
  ...theme.custom.centerColumn,
  [theme.breakpoints.up('tabletSm')]: {
    padding: '0 10px',
  },
}));

export const MainHeaderOneTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    maxWidth: '600px',
    marginBottom: '10px',
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: 1.4,
    color: 'white',
    paintOrder: 'stroke fill',
    textShadow: `2px 2px 0 ${'black'}, -1px -1px 0 ${'black'}, 1px -1px 0 ${'black'}, -1px 1px 0 ${'black'}, 1px 1px 0 ${'black'}`,
    [theme.breakpoints.up('mobileMd')]: {
      width: '90%',
      marginRight: 'auto',
      fontSize: '2.6rem',
    },
    [theme.breakpoints.up('mobileLg')]: {
      width: '80%',
      fontSize: '3rem',
    },
    [theme.breakpoints.up('tabletSm')]: {
      width: '73.5%',
      fontSize: '3rem',
    },
    [theme.breakpoints.up('tabletMd')]: {
      width: '68.5%',
      fontSize: '3.4rem',
    },
    [theme.breakpoints.up('tabletLg')]: {
      width: '550px',
      fontSize: '3.2rem',
    },
    [theme.breakpoints.up('desktopSm')]: {
      width: '55%',
      fontSize: '4rem',
    },
  }),
);

export const MainHeaderOneSubtitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    maxWidth: '500px',
    marginBottom: '20px',
    fontSize: '1rem',
    letterSpacing: 1.2,
    color: 'white',
    paintOrder: 'stroke fill',
    textShadow: `2px 2px 0 ${'black'}, -1px -1px 0 ${'black'}, 1px -1px 0 ${'black'}, -1px 1px 0 ${'black'}, 1px 1px 0 ${'black'}`,
    [theme.breakpoints.up('mobileLg')]: {
      width: '85%',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('tabletSm')]: {
      width: '70%',
    },
    [theme.breakpoints.up('tabletMd')]: {
      width: '55%',
    },
    [theme.breakpoints.up('tabletLg')]: {
      width: '50%',
    },
  }),
);

export const MainHeaderOneAction = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    marginLeft: 0,
    '& > button.MuiButton-root': {
      fontSize: '1rem',
    },
  }),
);
