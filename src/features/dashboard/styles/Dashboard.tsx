import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';

export const DashBoard = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '500px',
  ...theme.custom.center,
}));
