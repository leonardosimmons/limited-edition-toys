import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useNavbarStyles = makeStyles(
  ({ breakpoints, mixins, palette, zIndex }: Theme) =>
    createStyles({
      menuBox: {
        flex: '0 1 20%',
        height: '60px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [breakpoints.up('desktopSm')]: {
          flex: '0 1 30%',
        },
      },

      navbar: {
        zIndex: zIndex.modal + 1,
        padding: '.35rem .5rem',
        backgroundColor: 'transparent',
        [breakpoints.up('desktopSm')]: {
          padding: '.5rem 2.5rem',
        },
      },

      navbarOffset: {
        ...mixins.toolbar,
      },

      promoBox: {
        display: 'none',
        position: 'relative',
        flex: '0 1 20%',
        minHeight: '100px',
        transform: 'scale(.8)',
        [breakpoints.up('mobileLg')]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        [breakpoints.up('tabletLg')]: {
          transform: 'scale(1)',
        },
        [breakpoints.up('desktopSm')]: {
          flex: '0 1 30%',
          justifyContent: 'flex-start',
        },
      },

      title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        color: palette.secondary.main,
        paintOrder: 'stroke fill',
        textShadow: `2px 2px 0 ${palette.secondary.dark}, -1px -1px 0 ${palette.secondary.dark}, 1px -1px 0 ${palette.secondary.dark}, -1px 1px 0 ${palette.secondary.dark}, 1px 1px 0 ${palette.secondary.dark}`,
        [breakpoints.up('mobileMd')]: {
          flexDirection: 'row',
          marginRight: 0,
        },
        [breakpoints.up('tabletSm')]: {
          textShadow: `4px 4px 0 ${palette.secondary.dark}, -1px -1px 0 ${palette.secondary.dark}, 1px -1px 0 ${palette.secondary.dark}, -1px 1px 0 ${palette.secondary.dark}, 1px 1px 0 ${palette.secondary.dark}`,
        },
        [breakpoints.up('tabletLg')]: {
          flexDirection: 'column',
        },
        '& span:nth-child(1)': {
          marginRight: '10px',
          fontFamily: 'Jost, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          [breakpoints.up('mobileMd')]: {
            fontSize: '1.35rem',
          },
          [breakpoints.up('tabletSm')]: {
            fontSize: '2.35rem',
          },
          [breakpoints.up('tabletMd')]: {
            fontSize: '2.5rem',
          },
          [breakpoints.up('tabletLg')]: {
            fontSize: '2.5rem',
          },
          [breakpoints.up('desktopMd')]: {
            fontSize: '3.5rem',
          },
        },
        '& span:nth-child(2)': {
          marginLeft: '10px',
          fontFamily: 'Pacifico, cursive',
          fontSize: '1.35rem',
          [breakpoints.up('tabletSm')]: {
            fontSize: '2.5rem',
          },
          [breakpoints.up('tabletLg')]: {
            fontSize: '3.5rem',
          },
          [breakpoints.up('desktopMd')]: {
            fontSize: '4.25rem',
          },
        },
      },

      titleButton: {
        flex: 1,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    }),
);
