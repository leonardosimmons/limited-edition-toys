import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';

export const ProductImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '320px',
  height: '228px',
  margin: '30px 0',
  ...theme.custom?.centerColumn,
  [theme.breakpoints.up('mobileMd')]: {
    width: '480px',
    height: '343px',
  },
  [theme.breakpoints.up('mobileLg')]: {
    width: '650px',
    height: '464px',
  },
}));

export const ProductMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
  }),
);

export const ProductMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  minHeight: '70vh',
  ...theme.custom.center,
  [theme.breakpoints.up('tabletMd')]: {
    flexDirection: 'row',
  },
  '& > div.MuiGrid-item:nth-of-type(1)': {
    [theme.breakpoints.up('tabletMd')]: {
      flex: '0 1 30%',
    },
  },
  '& > div.MuiGrid-item:nth-of-type(2)': {
    [theme.breakpoints.up('tabletMd')]: {
      flex: 1,
    },
  },
}));
