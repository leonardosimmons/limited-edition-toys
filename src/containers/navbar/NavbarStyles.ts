import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

const useNavbarStyles = makeStyles(
  ({ breakpoints, mixins, palette, zIndex }: Theme) =>
    createStyles({
      menuBox: {
        flex: '0 1 30%',
        height: '60px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '1.5rem',
      },

      navbar: {
        zIndex: zIndex.modal + 1,
        padding: '1.5rem 3.5rem',
        backgroundColor: 'transparent',
      },

      navbarOffset: {
        ...mixins.toolbar,
      },

      promoBox: {
        position: 'relative',
        flex: '0 1 30%',
        minHeight: '100px',
      },

      title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        color: palette.secondary.main,
        paintOrder: 'stroke fill',
        textShadow: `4px 4px 0 ${palette.secondary.dark}, -1px -1px 0 ${palette.secondary.dark}, 1px -1px 0 ${palette.secondary.dark}, -1px 1px 0 ${palette.secondary.dark}, 1px 1px 0 ${palette.secondary.dark}`,
        [breakpoints.up('desktopSm')]: {
          fontSize: '3.5rem',
        },
        '& span:nth-child(1)': {
          marginRight: '10px',
          fontFamily: 'Jost, sans-serif',
          fontWeight: 700,
        },
        '& span:nth-child(2)': {
          marginLeft: '10px',
          fontFamily: 'Pacifico, cursive',
          [breakpoints.up('desktopSm')]: {
            fontSize: '4.5rem',
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

export default useNavbarStyles;
