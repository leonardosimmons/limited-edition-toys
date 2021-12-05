import { styled } from '@mui/material/styles';

import Button, { ButtonProps } from '@mui/material/Button';

interface StyledCheckoutButton extends ButtonProps {
  fullWidth?: boolean;
}

export const CheckoutButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'fullWidth',
})<ButtonProps>(({ fullWidth, theme }) => ({
  '&.MuiButton-root': {
    width: '23ch',
    marginBottom: '15px',
    padding: '10px 0',
    textTransform: 'none',
    fontSize: '1rem',
    color: theme.custom.palette.white,
    backgroundColor: theme.custom.palette.tertiary.dark,
    '&:active': {
      ...theme.custom.actions.clicked,
    },
    ...(fullWidth && {
      width: '100%',
    }),
  },
}));
