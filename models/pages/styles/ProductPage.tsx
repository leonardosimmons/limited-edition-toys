import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';

export const ProductImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '280px',
  height: '200px',
  margin: '30px 0',
  ...theme.custom?.centerColumn,
}));

export const ProductMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '100%',
    width: '100%',
    ...theme.custom?.centerColumn,
  }),
);

export const ProductMainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  minHeight: '70vh',
  ...theme.custom?.center,
}));
