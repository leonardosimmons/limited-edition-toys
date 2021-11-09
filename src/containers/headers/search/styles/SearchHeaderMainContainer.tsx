import { Images } from 'utils/keys';

import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';

export const SearchHeaderMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: '100%',
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    backgroundImage: `url(${Images.TOP_CLOUDS_LIGHT})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 85%',
    [theme.breakpoints.up('mobileMd')]: {
      marginTop: '30px',
      backgroundPosition: '0 100%',
    },
    [theme.breakpoints.up('mobileLg')]: {
      height: '195px',
    },
    [theme.breakpoints.up('mobileLg')]: {
      height: '225px',
    },
    [theme.breakpoints.up('tabletMd')]: {
      height: '275px',
      backgroundPosition: '0 120%',
      backgroundRepeat: 'repeat-x',
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
