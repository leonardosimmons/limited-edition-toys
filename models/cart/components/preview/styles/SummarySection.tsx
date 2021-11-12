import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import Button, { ButtonProps } from '@mui/material/Button';

export const SummaryMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({}),
);

export const SummaryInfoContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({}),
);

export const SummaryCheckoutButton = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    fontSize: '2rem',
  }),
);
