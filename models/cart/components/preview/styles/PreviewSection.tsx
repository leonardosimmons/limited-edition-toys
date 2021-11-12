import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';

export const PreviewMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    flex: 1,
    width: '100%',
    padding: '24px 24px 40px',
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

export const PreviewTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Jost',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  }),
);

export const PreviewProductGrid = styled(Grid)<GridProps>(({ theme }) => ({
  minHeight: '300px',
}));

export const PreviewCheckoutButton = styled(Button)<ButtonProps>(
  ({ theme }) => ({}),
);
