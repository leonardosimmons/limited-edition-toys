import { Images } from 'utils/keys';

import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';

export const ProductHeaderMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    backgroundImage: `url(${Images.TOP_CLOUDS_LIGHT})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 85%',
    [theme.breakpoints.up('mobileMd')]: {
      height: '200px',
      backgroundPosition: '0 100%',
    },
    [theme.breakpoints.up('mobileLg')]: {
      height: '195px',
      marginTop: 0,
    },
    [theme.breakpoints.up('tabletSm')]: {
      height: '225px',
    },
    [theme.breakpoints.up('tabletMd')]: {
      height: '275px',
      backgroundPosition: '0 120%',
      backgroundRepeat: 'repeat-x',
    },
    [theme.breakpoints.up('tabletLg')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.up('desktopSm')]: {
      height: '275px',
      backgroundSize: '70%',
      backgroundPosition: '20% 80%',
    },
    [theme.breakpoints.up('desktopMd')]: {
      height: '350px',
      backgroundSize: '55%',
    },
    [theme.breakpoints.up('desktopLg')]: {
      height: '350px',
      backgroundSize: '35%',
    },
  }),
);
