import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

import Paper from '@material-ui/core/Paper';
import { ClassNameMap } from '@material-ui/styles';

const useStyles = makeStyles(({ breakpoints, custom }: Theme) =>
  createStyles({
    base: {
      width: '335px',
      height: '375px',
      ...custom.centerColumn,
      ...custom.shadow.card.display,
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

type Props = {
  classes?: string;
};

const DisplayCard: React.FunctionComponent<Props> = ({
  children,
  classes,
}): JSX.Element => {
  const styles = useStyles();
  return (
    <Paper className={`${styles.base} ${classes || ''}`}>{children}</Paper>
  );
};

export default DisplayCard;
