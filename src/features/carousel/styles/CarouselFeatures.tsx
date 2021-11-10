import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const CarouselWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  margin: '0 auto',
  overflow: 'hidden',
  '& > div#left-arrow': {
    left: '5px',
    [theme.breakpoints.up('mobileLg')]: {
      left: '10px',
    },
    [theme.breakpoints.up('tabletLg')]: {
      left: '25px',
    },
  },
  '& > div#right-arrow': {
    right: '5px',
    [theme.breakpoints.up('mobileLg')]: {
      right: '10px',
    },
    [theme.breakpoints.up('tabletLg')]: {
      right: '25px',
    },
  },
}));

export const CarouselArrowBase = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '50px',
  width: '50px',
  ...theme.custom.center,
  top: '50%',
  borderRadius: '50%',
  transition: 'transform ease-in 0.1s',
  cursor: 'pointer',
  '& > span': {
    margin: '0 auto',
    fontSize: '2.5rem',
    color: theme.palette.secondary.main,
    textShadow: `2px 2px 0 ${theme.palette.secondary.dark}, -1px -1px 0 ${theme.palette.secondary.dark}, 1px -1px 0 ${theme.palette.secondary.dark}, -1px 1px 0 ${theme.palette.secondary.dark}, 1px 1px 0 ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '4.25rem',
    },
    [theme.breakpoints.up('tabletLg')]: {
      fontSize: '4.75rem',
    },
  },
}));

export const CarouselDots = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '10px',
  height: '5rem',
  width: '100%',
  ...theme.custom.center,
  [theme.breakpoints.up('tabletLg')]: {
    bottom: '25px',
  },
  '& *': {
    padding: '10px',
    marginRight: '5px',
    cursor: 'pointer',
    borderRadius: '50%',
  },
}));

export const CarouselImage = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '150px',
  height: '155px',
  margin: '10px auto',
  borderRadius: '10px',
  ...theme.custom?.centerColumn,
  [theme.breakpoints.up('mobileMd')]: {
    height: '170px',
    width: '275px',
  },
  [theme.breakpoints.up('mobileLg')]: {
    height: '225px',
    width: '400px',
  },
  [theme.breakpoints.up('tabletSm')]: {
    height: '338px',
    width: '600px',
  },
  [theme.breakpoints.up('tabletLg')]: {
    height: '450px',
    width: '800px',
  },
  [theme.breakpoints.up('desktopSm')]: {
    width: '1024px',
    height: '720px',
  },
  [theme.breakpoints.up('desktopMd')]: {
    width: '1280px',
    height: '720px',
  },
  '& > span': {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& > img': {
      margin: '0 auto',
      transition: 'all .5s',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
  },
}));
