import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Button, { ButtonProps } from '@mui/material/Button';

export const PromoCodeMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    maxWidth: '600px',
    marginBottom: '20px',
    border: 'none !important',
    borderBottom: `2px solid ${theme.palette.grey[200]}`,
    '& > h3.MuiTypography-h3': {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      paddingTop: '1rem',
    },
    '& > p.MuiTypography-body1': {
      width: '100%',
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      paddingTop: '1rem',
    },
  }),
);

export const PromoCodeAction = styled(Box)<BoxProps>(({ theme }) => ({
  ...theme.custom.center,
  padding: '1rem 0',
}));

export const PromoCodeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '30%',
  marginLeft: '12.5px',
  fontSize: '1rem',
  color: theme.custom.palette.white,
  backgroundColor: theme.palette.primary.dark,
  '&:hover': {
    transform: 'translateY(-2px)',
    backgroundColor: theme.palette.primary.main,
  },
  '&:active': {
    transform: 'translateY(2px)',
  },
  [theme.breakpoints.up('mobileLg')]: {
    //width: '120px',
    marginLeft: '20px',
  },
}));
