import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';

interface StyledPreviewTitle extends TypographyProps {
  cartCount?: number;
}

export const PreviewMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    flex: 1,
    width: '100%',
    padding: '24px 24px 40px',
    [theme.breakpoints.up('tabletMd')]: {
      padding: '24px 0 0',
    },
    [theme.breakpoints.up('tabletLg')]: {
      padding: '24px 24px 0',
    },
  }),
);

export const PreviewHeading = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  ...theme.custom.centerColumn,
  marginBottom: '30px',
  [theme.breakpoints.up('tabletMd')]: {
    flexDirection: 'row',
  },
  '& > h1.MuiTypography-h1': {
    alignSelf: 'flex-start',
    margin: 0,
  },
  '& > button.MuiButton-root': {
    width: '100%',
    marginBottom: '15px',
    fontSize: '1rem',
    color: theme.custom.palette.white,
    backgroundColor: theme.custom.palette.tertiary.dark,
    '&:active': {
      ...theme.custom.actions.clicked,
    },
  },
  ' & > a': {
    position: 'relative',
    fontSize: '1rem',
    '&:active': {
      transform: 'translateY(2px)',
    },
    [theme.breakpoints.up('tabletMd')]: {
      marginLeft: 'auto',
      fontSize: '.9rem',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      left: '2px',
      top: '23px',
      width: '15ch',
      height: '1px',
      margin: 'auto',
      backgroundColor: 'black',
    },
  },
}));

export const PreviewTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'cartCount',
})<StyledPreviewTitle>(({ cartCount, theme }) => ({
  position: 'relative',
  margin: '0 auto',
  textAlign: 'center',
  fontFamily: 'Jost',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  [theme.breakpoints.up('mobileMd')]: {
    width: '17.25ch',
  },
  [theme.breakpoints.up('tabletMd')]: {
    marginRight: 'auto',
    textAlign: 'left',
  },
  [theme.breakpoints.up('desktopSm')]: {
    fontSize: '2.15rem',
  },
  ...(cartCount && {
    '&:after': {
      [theme.breakpoints.up('mobileMd')]: {
        content: `"(${cartCount})"`,
        position: 'absolute',
        top: 6,
        marginLeft: '8px',
        fontSize: '1rem',
      },
      [theme.breakpoints.up('desktopSm')]: {
        top: 10,
      },
    },
  }),
}));

export const PreviewProductGrid = styled(Grid)<GridProps>(({ theme }) => ({
  minHeight: '300px',
}));

export const PreviewAction = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}));
