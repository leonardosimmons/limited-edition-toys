import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

const useDesktopTabStyles = makeStyles(({ breakpoints, palette }: Theme) =>
  createStyles({
    button: {
      fontSize: '1.2rem',
      fontFamily: 'Jost, sans-serif',
      fontWeight: 700,
      letterSpacing: 1.6,
      textTransform: 'initial',
      color: 'white',
      textShadow: `2px 2px 0 ${palette.grey[700]}, -1px -1px 0 ${palette.grey[700]}, 1px -1px 0 ${palette.grey[700]}, -1px 1px 0 ${palette.grey[700]}, 1px 1px 0 ${palette.grey[700]}`,
      '&:hover': {
        borderBottom: `1px solid ${palette.grey[800]}`,
      },
      '& > span > span.MuiButton-startIcon': {
        color: palette.grey[800],
      },
    },

    cartIcon: {
      marginLeft: '10px',
      [breakpoints.up('desktopSm')]: {
        marginLeft: '5px',
      },
      [breakpoints.up('desktopMd')]: {
        margin: '0 10px',
      },
      [breakpoints.up('desktopMd')]: {
        margin: '0 20px',
      },
    },

    divider: {
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
  }),
);

export default useDesktopTabStyles;
