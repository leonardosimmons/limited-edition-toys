import { styled } from '@mui/material/styles';

import Typography, { TypographyProps } from '@mui/material/Typography';

export const ProductHeaderTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    '&.MuiTypography-h2': {
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: 8,
      color: theme.palette.grey[900],
      textShadow: `2px 2px 0 ${theme.palette.grey[500]}, -1px -1px 0 ${theme.palette.grey[500]}, 1px -1px 0 ${theme.palette.grey[500]}, -1px 1px 0 ${theme.palette.grey[500]}, 1px 1px 0 ${theme.palette.grey[500]}`,
      [theme.breakpoints.up('mobileMd')]: {
        fontSize: '3rem',
        marginBottom: '50px',
      },
      [theme.breakpoints.up('tabletSm')]: {
        textShadow: `4px 4px 0 ${theme.palette.grey[500]}, -1px -1px 0 ${theme.palette.grey[500]}, 1px -1px 0 ${theme.palette.grey[500]}, -1px 1px 0 ${theme.palette.grey[500]}, 1px 1px 0 ${theme.palette.grey[500]}`,
      },
      [theme.breakpoints.up('tabletMd')]: {
        fontSize: '5rem',
        marginBottom: '80px',
      },
      [theme.breakpoints.up('desktopSm')]: {
        fontSize: '5rem',
        marginBottom: '100px',
      },
      [theme.breakpoints.up('desktopMd')]: {
        fontSize: '7rem',
        marginBottom: '120px',
      },
    },
  }),
);
