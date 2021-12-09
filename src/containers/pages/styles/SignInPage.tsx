import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import FormControl, { FormControlProps } from '@mui/material/FormControl';

export const SignInMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    justifyContent: 'flex-start',
    marginBottom: '2rem',
    [theme.breakpoints.up('desktopSm')]: {
      minHeight: '1000px'
    },
  }),
);

export const SignInHeader = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  ...theme.custom.centerColumn,
  justifyContent: 'flex-start',
  padding: '2.35rem 0 ',
  [theme.breakpoints.up('tabletSm')]: {
    marginBottom: '2rem',
    padding: '3rem 0'
  },
  [theme.breakpoints.up('tabletLg')]: {
    marginBottom: '2rem',
    padding: '6rem 0'
  },
  [theme.breakpoints.up('desktopSm')]: {
    height: '400px',
    marginBottom: '2rem',
    padding: '4rem 0'
  },
  '& > span.MuiTypography-caption': {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    fontFamily: 'Jost',
    color: theme.palette.secondary.main,
    paintOrder: 'stroke fill',
    textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '2rem',
      textShadow: `4px 4px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '3rem'
    },
  },
  '& > h1.MuiTypography-h1': {
    textAlign: 'center',
    fontSize: '4rem',
    fontWeight: 'bold',
    fontFamily: 'Jost',
    color: theme.palette.secondary.main,
    paintOrder: 'stroke fill',
    textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('mobileMd')]: {
      fontSize: '4.5rem'
    },
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '6rem',
      textShadow: `4px 4px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '8rem'
    },
  },
}));

export const SignInInputFormControl = styled(FormControl)<FormControlProps>(
  ({ theme }) => ({
    maxWidth: '400px',
    width: '100%',
    marginBottom: '1rem',
    '& > label.MuiInputLabel-root': {
      fontSize: '1.2rem',
    },
    '& > div.MuiOutlinedInput-root': {
      '& > input.MuiOutlinedInput-input': {
        paddingBottom: '12px',
        fontSize: '1.5rem',
      },
    },
  }),
);

export const SignInInputButtonBox = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: '400px',
  width: '100%',
  ...theme.custom.centerColumn,
  '& > button.MuiButton-root:nth-of-type(1)': {
    width: '100%',
    fontSize: '1.2rem',
  },
  '& > div > button.MuiButton-root': {
    fontSize: '.9rem',
  },
}));
