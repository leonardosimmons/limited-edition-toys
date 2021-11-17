import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import { Images } from 'utils/keys';

export const MainHeaderWrapper = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '400px',
    width: '100%',
    backgroundImage: `url(${Images.TEST_HEADER})`,
    backgroundSize: 'cover',
    backgroundPosition: '-80% -10%',
    [theme.breakpoints.up('mobileMd')]: {
      backgroundPosition: '60% -10%',
    },
    [theme.breakpoints.up('mobileLg')]: {
      backgroundPosition: '50% -10%',
    },
    [theme.breakpoints.up('tabletLg')]: {
      backgroundSize: 'cover',
      backgroundPosition: '50% 0',
    },
    [theme.breakpoints.up('desktopSm')]: {
      height: '600px',
    },
    [theme.breakpoints.up('desktopLg')]: {
      height: '700px',
    },
  }),
);
