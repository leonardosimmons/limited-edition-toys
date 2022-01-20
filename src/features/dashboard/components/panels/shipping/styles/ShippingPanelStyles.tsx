import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
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

export const ShippingPanelWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export const ShippingPanelHeading = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    display: 'flex',
    '& > h3.MuiTypography-h3': {
      flex: '0 1 95%',
      fontSize: '1.8rem',
      marginBottom: '15px',
      fontWeight: 'bold',
      fontFamily: 'Jost',
      color: theme.palette.secondary.main,
      paintOrder: 'stroke fill',
      textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
      [theme.breakpoints.up('tabletSm')]: {
        fontSize: '1.8rem'
      },
      [theme.breakpoints.up('desktopSm')]: {
        fontSize: '2.4rem'
      },
    },
    '& > span.MuiTypography-caption': {
      padding: '1rem 0',
      color: theme.palette.primary.main,
      '&:active': {
        transform: 'translateY(2px)',
      },
    },
  }),
);
