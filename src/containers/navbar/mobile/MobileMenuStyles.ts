import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useMobileMenuStyles = makeStyles(({}: Theme) =>
  createStyles({
    menuButtonContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    menuButton: {
      height: '40px',
      width: '40px',
    },
  }),
);
