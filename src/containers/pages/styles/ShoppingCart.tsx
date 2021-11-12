import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';

export const ShoppingCartMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    minHeight: '50vh',
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    justifyContent: 'flex-start',
    [theme.breakpoints.up('tabletMd')]: {
      flexDirection: 'row',
    },
  }),
);

export const ShoppingCartPreviewSection = styled(Box)<BoxProps>(
  ({ theme }) => ({
    flex: 1,
    height: '100%',
    width: '100%',
  }),
);

export const ShoppingCartSummarySection = styled(Box)<BoxProps>(
  ({ theme }) => ({
    flex: '0 1 35%',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.secondary.light,
  }),
);
