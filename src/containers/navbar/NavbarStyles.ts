import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Color } from 'utils/keys';

export const useNavbarStyles = makeStyles(
  ({ breakpoints, mixins, palette, shadows, zIndex }: Theme) =>
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
        zIndex: zIndex.drawer - 1,
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        padding: '.35rem .5rem',
        backgroundColor: `rgba(${Color.PRIMARY_RGB}, 0.2)`,
        boxShadow: shadows[3],
        [breakpoints.up('mobileMd')]: {
          height: '65px',
        },
        [breakpoints.up('mobileLg')]: {
          height: '80px',
        },
        [breakpoints.up('tabletLg')]: {
          height: '150px',
        },
        [breakpoints.up('desktopSm')]: {
          marginTop: '1rem',
          padding: '.5rem 2.5rem',
          backgroundColor: 'transparent',
          boxShadow: 'none',
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
          marginRight: '5px',
          fontFamily: 'Jost, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          [breakpoints.up('mobileMd')]: {
            //fontSize: '1.65rem',
          },
          [breakpoints.up('tabletSm')]: {
            marginRight: '7px',
            fontSize: '2.35rem',
          },
          [breakpoints.up('tabletMd')]: {
            fontSize: '2.5rem',
          },
          [breakpoints.up('tabletLg')]: {
            fontSize: '2.5rem',
            margin: 0,
          },
          [breakpoints.up('desktopMd')]: {
            fontSize: '3.5rem',
          },
        },
        '& span:nth-child(2)': {
          marginLeft: '5px',
          fontFamily: 'Pacifico, cursive',
          fontSize: '1.5rem',
          [breakpoints.up('tabletSm')]: {
            marginLeft: '7px',
            fontSize: '2.5rem',
          },
          [breakpoints.up('tabletLg')]: {
            fontSize: '3.5rem',
            margin: 0,
          },
          [breakpoints.up('desktopMd')]: {
            fontSize: '4.25rem',
          },
        },
      },

      titleButton: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        [breakpoints.up('mobileLg')]: {
          justifyContent: 'center',
          padding: '1rem',
        },
      },
    }),
);
