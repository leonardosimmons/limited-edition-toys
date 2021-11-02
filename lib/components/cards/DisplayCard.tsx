import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(({ breakpoints, custom }: Theme) =>
  createStyles({
    displayCard: {
      width: '335px',
      height: '375px',
      marginBottom: '100px',
      ...custom.centerColumn,
      ...custom.shadow.card.display,
      '& > div.MuiCircularProgress-root': {
        marginBottom: '20px',
      },
      '&:hover': {
        ...custom.shadow.card.highlight,
      },
      [breakpoints.up('tabletSm')]: {
        width: '355px',
        height: '475px',
      },
    },
  }),
);

const DisplayCard: React.FunctionComponent = ({ children }): JSX.Element => {
  const styles = useStyles();
  return <Paper className={styles.displayCard}>{children}</Paper>;
};

export default DisplayCard;
