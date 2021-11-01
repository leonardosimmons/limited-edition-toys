import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(({ custom }: Theme) =>
  createStyles({
    loading: {
      ...custom.loading,
      '& > div.MuiCircularProgress-root': {
        marginBottom: '20px',
      },
    },
  }),
);

type Props = {
  customColor?: boolean;
};

const CircleLoadSpinner: React.FunctionComponent<Props> = ({
  customColor,
}): JSX.Element => {
  const styles = useStyles();

  return (
    <Box className={styles.loading}>
      <CircularProgress color={(customColor && 'inherit') || 'secondary'} />
      <div>Loading...</div>
    </Box>
  );
};

export default CircleLoadSpinner;
