import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

const useDesktopTabStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    button: {
      fontSize: '1rem',
      textTransform: 'initial',
      color: palette.grey[800],
      '&:hover': {
        borderBottom: `1px solid ${palette.grey[800]}`,
      },
    },

    divider: {
      margin: '10px',
    },
  }),
);

export default useDesktopTabStyles;
