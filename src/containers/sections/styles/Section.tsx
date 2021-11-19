import { styled } from '@mui/material/styles';
import { Images } from 'utils/keys';

import Box, { BoxProps } from '@mui/material/Box';
import Paper, { PaperProps } from '@mui/material/Paper';
import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Divider, { DividerProps } from '@mui/material/Divider';

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
    height: '1500px',
    backgroundImage: `url(${Images.MIDDLE_CLOUDS})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center',
    [theme.breakpoints.up('mobileLg')]: {
      height: '1200px',
    },
    [theme.breakpoints.up('tabletSm')]: {
      height: '1300px',
    },
    [theme.breakpoints.up('tabletMd')]: {
      height: '1400px',
      marginTop: '-40px',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('desktopSm')]: {
      height: '1200px',
      marginTop: '-20px',
      marginBottom: '5rem',
      backgroundSize: 'contain',
    },
    [theme.breakpoints.up('desktopMd')]: {
      height: '1200px',
      marginTop: 0,
    },
    [theme.breakpoints.up('desktopLg')]: {
      height: '1300px',
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
    fontFamily: 'Jost',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('mobileMd')]: {
      width: '90%',
      fontSize: '3.25rem',
    },
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '3.5rem',
      textShadow: `4px 4px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '4.25rem',
    },
    [theme.breakpoints.up('desktopSm')]: {
      fontSize: '4.75rem',
    },
    [theme.breakpoints.up('desktopMd')]: {
      fontSize: '5.25rem',
    },
  }),
);

export const SectionDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== 'primary',
})<StyledDividerProps>(({ primary, theme }) => ({
  height: '7px',
  width: '150px',
  boxShadow: `2px 2px 0 ${theme.palette.grey[400]}, -1px -1px 0 ${theme.palette.grey[400]}, 1px -1px 0 ${theme.palette.grey[400]}, -1px 1px 0 ${theme.palette.grey[400]}, 1px 1px 0 ${theme.palette.grey[400]}`,
  [theme.breakpoints.up('mobileMd')]: {
    marginBottom: '-4rem',
  },
  [theme.breakpoints.up('mobileLg')]: {
    marginBottom: '2rem',
  },
  [theme.breakpoints.up('tabletSm')]: {
    marginBottom: '1rem',
    textShadow: `4px 4px 0 ${theme.palette.grey[400]}, -1px -1px 0 ${theme.palette.grey[400]}, 1px -1px 0 ${theme.palette.grey[400]}, -1px 1px 0 ${theme.palette.grey[400]}, 1px 1px 0 ${theme.palette.grey[400]}`,
  },
  [theme.breakpoints.up('desktopSm')]: {
    marginBottom: '6rem',
  },
  backgroundColor: 'white',
  ...(primary && {
    height: '5px',
    backgroundColor: theme.palette.primary.light,
    boxShadow: `2px 2px 0 ${theme.palette.primary.dark}, -1px -1px 0 ${theme.palette.primary.dark}, 1px -1px 0 ${theme.palette.primary.dark}, -1px 1px 0 ${theme.palette.primary.dark}, 1px 1px 0 ${theme.palette.primary.dark}`,
    [theme.breakpoints.up('tabletSm')]: {
      textShadow: `4px 4px 0 ${theme.palette.primary.dark}, -1px -1px 0 ${theme.palette.primary.dark}, 1px -1px 0 ${theme.palette.primary.dark}, -1px 1px 0 ${theme.palette.primary.dark}, 1px 1px 0 ${theme.palette.primary.dark}`,
    },
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
  maxWidth: '1500px',
  width: '100%',
  height: '70%',
  ...theme.custom.center,
  [theme.breakpoints.up('mobileMd')]: {
    marginTop: '20px',
  },
  [theme.breakpoints.up('mobileLg')]: {
    height: '45rem',
  },
  [theme.breakpoints.up('tabletSm')]: {
    height: '50rem',
  },
  [theme.breakpoints.up('tabletMd')]: {
    height: '55rem',
  },
  [theme.breakpoints.up('tabletLg')]: {
    height: '60rem',
  },
  [theme.breakpoints.up('desktopSm')]: {
    height: '35rem',
  },
  [theme.breakpoints.up('desktopLg')]: {
    height: '38rem',
  },
}));

export const SectionEvent = styled(Container)<ContainerProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  ...theme.custom.centerColumn,
  '& > div.MuiBox-root': {
    '&:nth-of-type(1)': {
      position: 'relative',
      height: '30rem',
      width: '100%',
      [theme.breakpoints.up('desktopSm')]: {
        height: '90%',
        flex: '0 1 50%',
      },
      [theme.breakpoints.up('desktopSm')]: {
        height: '40rem',
        flex: '0 1 50%',
      },
    },
  },
  [theme.breakpoints.up('desktopSm')]: {
    flexDirection: 'row',
  },
}));

export const SectionEventCard = styled(Paper)<PaperProps>(({ theme }) => ({
  flex: '1',
  maxHeight: '450px',
  maxWidth: '550px',
  width: '100%',
  borderRadius: '1rem',
  ...theme.custom.centerColumn,
  ...theme.custom.shadow.card.display,
  marginTop: '1rem',
  padding: 0,
  [theme.breakpoints.up('mobileLg')]: {
    width: '80%',
  },
  [theme.breakpoints.up('tabletSm')]: {
    maxHeight: '350px',
    marginTop: '2rem',
  },
  '& > h3.MuiTypography-h3': {
    padding: '.5rem',
    letterSpacing: 1.2,
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('tabletSm')]: {
      textShadow: `4px 4px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    },
    [theme.breakpoints.up('tabletSm')]: {
      padding: '1rem',
    },
  },
  '& > div.MuiBox-root': {
    width: '100%',
    ...theme.custom.center,
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('tabletSm')]: {
      marginBotom: '2rem',
    },
    '& > span.MuiTypography-caption': {
      width: '100%',
      border: `1px solid ${theme.palette.grey[200]}`,
      textAlign: 'center',
      fontSize: '1.2rem',
    },
  },
  '& > p.MuiTypography-body2': {
    width: '90%',
    padding: '.5rem',
    textAlign: 'center',
    fontSize: '1rem',
    '&:nth-of-type(1)': {
      padding: '1rem .5rem',
    },
    '&:nth-of-type(2)': {
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
  },
}));
