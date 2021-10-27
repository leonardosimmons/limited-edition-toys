import React from 'react';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';
import { Links } from 'utils/keys';

import { useFooterStyles } from './FooterStyles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

type Props = {};

const Footer: React.FunctionComponent<Props> = (): JSX.Element => {
  const styles = useFooterStyles();

  return (
    <footer className={styles.footer}>
      <Grid
        container
        justifyContent="center"
        classes={{ container: styles.mainContainer }}>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column">
            <Grid
              item
              className={styles.logo}
              component={NextLinkComposed}
              to={Links.HOME}>
              {/* add logo */}
            </Grid>
            <Grid item className={styles.description}>
              {/* add store description */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column">
            <Grid item className={styles.information}>
              <Typography
                variant="h6"
                className={styles.informationText}></Typography>
            </Grid>
            <Grid item className={styles.information}>
              {/* Information List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
