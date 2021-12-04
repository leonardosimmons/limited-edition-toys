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
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center',
    [theme.breakpoints.up('mobileLg')]: {
      height: '500px',
    },
    [theme.breakpoints.up('tabletSm')]: {
      height: '550px',
    },
    [theme.breakpoints.up('tabletMd')]: {
      height: '500px',
    },
    [theme.breakpoints.up('desktopSm')]: {
      marginTop: '-20px',
      marginBottom: '5rem',
    },
    [theme.breakpoints.up('desktopMd')]: {
      height: '700px',
      marginTop: 0,
    },
    [theme.breakpoints.up('desktopLg')]: {
      height: '800px',
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

export const SectionEventWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '10rem',
  backgroundImage: `url(${Images.MIDDLE_CLOUDS})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'center',
}));

export const SectionEventBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  maxWidth: '1500px',
  width: '100%',
  ...theme.custom.center,
  [theme.breakpoints.up('mobileMd')]: {
    marginTop: '20px',
  },
  [theme.breakpoints.up('mobileLg')]: {
    height: '5rem',
  },
  [theme.breakpoints.up('desktopSm')]: {
    height: '5rem',
    marginBottom: '4rem',
  },
}));

export const SectionEvent = styled(Container)<ContainerProps>(({ theme }) => ({
  width: '100%',
  height: '200px',
  ...theme.custom.centerColumn,
  textAlign: 'center',
  '& > h4.MuiTypography-h4': {
    fontSize: '2rem',
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
