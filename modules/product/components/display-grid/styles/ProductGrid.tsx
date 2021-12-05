import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import Grid, { GridProps } from '@mui/material/Grid';

export const ProductGridMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    flex: 1,
    width: '100%',
    maxWidth: '1650px',
    ...theme.custom.centerColumn,
    marginTop: '50px',
    marginBottom: '100px',
    '&.MuiContainer-root': {
      padding: 0,
    },
    '& > h2.MuiTypography-h2': {
      marginBottom: '2rem',
      fontSize: '1.6rem',
      fontWeight: 'bold',
      textShadow: `2px 2px 0 ${theme.palette.grey[500]}, -1px -1px 0 ${theme.palette.grey[500]}, 1px -1px 0 ${theme.palette.grey[500]}, -1px 1px 0 ${theme.palette.grey[500]}, 1px 1px 0 ${theme.palette.grey[500]}`,
      [theme.breakpoints.up('mobileMd')]: {
        fontSize: '1.8rem',
      },
      [theme.breakpoints.up('tabletSm')]: {
        textShadow: `4px 4px 0 ${theme.palette.grey[500]}, -1px -1px 0 ${theme.palette.grey[500]}, 1px -1px 0 ${theme.palette.grey[500]}, -1px 1px 0 ${theme.palette.grey[500]}, 1px 1px 0 ${theme.palette.grey[500]}`,
      },
      [theme.breakpoints.up('tabletMd')]: {
        fontSize: '2rem',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      [theme.breakpoints.up('tabletMd')]: {
        margin: '3rem 0',
      },
    },
  }),
);

export const ProductGrid = styled(Grid)<GridProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  ...theme.custom.center,
  '& > div.MuiGrid-item': {
    [theme.breakpoints.up('tabletMd')]: {
      transform: 'scale(.91)',
    },
    [theme.breakpoints.up('desktopMd')]: {
      transform: 'scale(1)',
    },
    ...theme.custom.center,
  },
}));
