import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Divider, { DividerProps } from '@mui/material/Divider';
import { Images } from 'utils/keys';

interface StyledContainerProps extends ContainerProps {
  background?: boolean;
}

interface StyledDividerProps extends DividerProps {
  primary?: boolean;
}

export const SectionWrapper = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'background',
})<StyledContainerProps>(({ background, theme }) => ({
  ...theme.custom.centerColumn,
  marginTop: '40px',
  ...(background && {
    height: '1100px',
    backgroundImage: `url(${Images.MIDDLE_CLOUDS})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center',
    [theme.breakpoints.up('mobileLg')]: {
      height: '1300px',
      marginTop: '-40px',
    },
    [theme.breakpoints.up('tabletMd')]: {
      height: '1100px',
      marginTop: '-40px',
      backgroundSize: '110% 120%',
    },
    [theme.breakpoints.up('desktopSm')]: {
      height: '1700px',
      marginTop: '-20px',
      backgroundSize: '100%',
    },
    [theme.breakpoints.up('desktopMd')]: {
      height: '2100px',
      marginTop: 0,
      backgroundSize: '95%',
    },
    [theme.breakpoints.up('desktopLg')]: {
      height: '1900px',
      backgroundSize: '50%',
    },
  }),
}));

export const SectionHeader = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '10rem',
}));

export const SectionTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('mobileMd')]: {
      width: '90%',
      fontSize: '2.25rem',
    },
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '2.75rem',
    },
    [theme.breakpoints.up('desktopSm')]: {
      fontSize: '3.5rem',
    },
  }),
);

export const SectionDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== 'primary',
})<StyledDividerProps>(({ primary, theme }) => ({
  height: '7px',
  width: '150px',
  backgroundColor: 'white',
  ...(primary && {
    height: '5px',
    backgroundColor: theme.palette.primary.main,
  }),
}));

export const SectionBannerBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  maxWidth: '1050px',
  width: '100%',
  height: '85px',
  objectFit: 'contain',
  [theme.breakpoints.up('mobileLg')]: {
    height: '125px',
  },
  [theme.breakpoints.up('tabletSm')]: {
    height: '150px',
  },
  [theme.breakpoints.up('tabletLg')]: {
    height: '175px',
  },
  [theme.breakpoints.up('desktopMd')]: {
    height: '200px',
  },
}));

export const SectionEventBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '30rem',
  ...theme.custom.center,
  [theme.breakpoints.up('mobileMd')]: {
    marginTop: '20px',
  },
  [theme.breakpoints.up('mobileLg')]: {
    height: '40rem',
    marginTop: '40px',
  },
  [theme.breakpoints.up('tabletSm')]: {
    height: '45rem',
    marginTop: '40px',
  },
  [theme.breakpoints.up('tabletMd')]: {
    height: '60rem',
    marginTop: '40px',
  },
  [theme.breakpoints.up('desktopSm')]: {
    marginTop: '40px',
  },
}));
