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
        '& > hr.MuiDivider-root': {
          height: '60%',
          backgroundColor: palette.grey[500],
          margin: 'auto 10px',
          [breakpoints.up('desktopSm')]: {
            margin: 'auto 10px',
          },
          [breakpoints.up('desktopLg')]: {
            margin: 'auto 20px',
          },
        },
        [breakpoints.up('desktopSm')]: {
          flex: '0 1 30%',
        },
        [breakpoints.up('desktopMd')]: {
          flex: '0 1 30%',
        },
      },

      navbar: {
        zIndex: zIndex.drawer - 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '.35rem .35rem',
        backgroundColor: Color.NAVBAR_BACKGROUND,
        boxShadow: shadows[3],
        [breakpoints.up('desktopSm')]: {
          padding: '0 1.5rem',
          boxShadow: 'none',
        },
      },

      navbarColors: {
        color: '#fff !important',
        backgroundColor: '#bbdcff !important',
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
          marginRight: 'auto',
          transform: 'scale(1)',
        },
        [breakpoints.up('desktopSm')]: {
          flex: '0 1 30%',
          justifyContent: 'flex-start',
        },
        [breakpoints.up('desktopMd')]: {
          flex: '0 1 25%',
          transform: 'scale(1.2)',
        },
        [breakpoints.up('desktopMd')]: {
          marginLeft: '1rem',
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
          //flexDirection: 'column',
        },
        '& span:nth-child(1)': {
          marginRight: '5px',
          fontFamily: 'Jost, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 700,
          [breakpoints.up('mobileMd')]: {
            fontSize: '1.5rem',
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
            marginRight: '15px',
          },
          [breakpoints.up('desktopSm')]: {
            fontSize: '2.25rem',
          },
          [breakpoints.up('desktopMd')]: {
            fontSize: '3rem',
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
            fontSize: '3rem',
            margin: 0,
          },
          [breakpoints.up('desktopSm')]: {
            fontSize: '2.75rem',
          },
          [breakpoints.up('desktopMd')]: {
            fontSize: '3.5rem',
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
        },
      },

      titleBox: {
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },

      toolbar: {
        height: '100%',
      },
    }),
);
