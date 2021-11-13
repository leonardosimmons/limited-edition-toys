import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';

export const ShoppingCartMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    maxWidth: '1850px',
    width: '100%',
    height: '100%',
    ...theme.custom.centerColumn,
    alignItems: 'flex-start',
    [theme.breakpoints.up('tabletMd')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }),
);

export const PreviewSection = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  flex: 1,
  width: '100%',
  [theme.breakpoints.up('tabletMd')]: {
    minHeight: '70vh',
    padding: '24px 50px 80px',
  },
  '&::after': {
    [theme.breakpoints.up('tabletMd')]: {
      content: '""',
      position: 'absolute',
      height: '400px',
      width: '2px',
      top: 50,
      right: 10,
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export const SummarySection = styled(Box)<BoxProps>(({ theme }) => ({
  flex: '0 1 35%',
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('tabletMd')]: {
    minHeight: '70vh',
    paddingTop: '30px',
  },
}));
