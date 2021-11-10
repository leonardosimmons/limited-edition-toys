import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import Button, { ButtonProps } from '@mui/material/Button';

export const HomePageMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    minHeight: '70vh', // temp
    maxWidth: '1850px',
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    justifyContent: 'flex-start',
  }),
);
