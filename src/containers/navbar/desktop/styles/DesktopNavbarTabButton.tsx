import { styled } from '@mui/material/styles';

import Button, { ButtonProps } from '@mui/material/Button';

export const DesktopNavbarTabButton = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    fontSize: '1.2rem',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 700,
    letterSpacing: 1.6,
    textTransform: 'initial',
    color: 'white',
    textShadow: `2px 2px 0 ${theme.palette.grey[700]}, -1px -1px 0 ${theme.palette.grey[700]}, 1px -1px 0 ${theme.palette.grey[700]}, -1px 1px 0 ${theme.palette.grey[700]}, 1px 1px 0 ${theme.palette.grey[700]}`,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.grey[800]}`,
    },
    '& > span.MuiButton-startIcon': {
      color: theme.palette.grey[800],
    },
  }),
);
