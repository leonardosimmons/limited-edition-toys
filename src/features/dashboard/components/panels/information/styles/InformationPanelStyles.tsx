import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const Header = styled(Typography)<TypographyProps>(({ theme }) => ({
  width: '100%',
  padding: '1rem 0',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: theme.palette.grey[800],
}));

export const AccountInformationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export const AccountInformationHeading = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  '& > h3.MuiTypography-h3': {
    flex: '0 1 95%',
    fontSize: '1.8rem',
    marginBottom: '15px'
  },
  '& > span.MuiTypography-caption': {
    padding: '1rem 0',
    color: theme.palette.primary.main,
    '&:active': {
      transform: 'translateY(2px)',
    },
  }
}));

interface StyledInformationInput extends BoxProps {
  type?: 'input' | 'text';
}

export const AccountInformationInput = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type',
})<StyledInformationInput>(({ type, theme }) => ({
  ...theme.custom.center,
  justifyContent: 'flex-start',
  marginBottom: '1rem',
  '& > h6.MuiTypography-h6': {
    fontSize: '1.6rem',
    flex: '0 1 25%',
  },
  ...(type && type === 'text' && {
    alignItems: 'flex-end',
    height: '3rem'
  })
}));

export const AccountInformationButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: '20px',
  fontSize: '1rem',
  '&:active': {
    transform: 'translateY(2px)'
  }
}))