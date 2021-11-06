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
  [theme.breakpoints.up('tabletLg')]: {
    width: '480px',
    height: '343px',
    marginBottom: '300px',
  },
  [theme.breakpoints.up('desktopSm')]: {
    width: '600px',
    height: '400px',
    marginBottom: '100px',
  },
  [theme.breakpoints.up('desktopMd')]: {
    marginBottom: '200px',
  },
  [theme.breakpoints.up('desktopLg')]: {
    width: '900px',
    height: '400px',
  },
}));

export const ProductMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    ...theme.custom.centerColumn,
    '& > div.toolbar-spacer': {
      [theme.breakpoints.up('tabletLg')]: {
        ...theme.mixins.toolbar,
      },
      [theme.breakpoints.up('desktopSm')]: {
        minHeight: 0,
        height: 0,
      },
    },
  }),
);

export const ProductMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  maxWidth: '1750px',
  minHeight: '70vh',
  ...theme.custom.center,
  [theme.breakpoints.up('tabletMd')]: {
    maxHeight: '1300px',
  },
  [theme.breakpoints.up('desktopSm')]: {
    alignItems: 'flex-start',
  },
  '& > div.MuiGrid-item:nth-of-type(1)': {
    [theme.breakpoints.up('tabletMd')]: {
      flex: '0 1 30%',
    },
    [theme.breakpoints.up('desktopSm')]: {
      height: '100%',
      alignSelf: 'center',
    },
  },
  '& > div.MuiGrid-item:nth-of-type(2)': {
    [theme.breakpoints.up('tabletMd')]: {
      flex: 1,
    },
  },
}));
