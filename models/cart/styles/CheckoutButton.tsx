import { styled } from '@mui/material/styles';

import Button, { ButtonProps } from '@mui/material/Button';

export const CheckoutButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.MuiButton-root': {
    width: '100%',
    marginBottom: '15px',
    padding: '10px 0',
    textTransform: 'none',
    fontSize: '1rem',
    color: theme.custom.palette.white,
    backgroundColor: theme.custom.palette.tertiary.dark,
    '&:active': {
      ...theme.custom.actions.clicked,
    },
  },
}));
