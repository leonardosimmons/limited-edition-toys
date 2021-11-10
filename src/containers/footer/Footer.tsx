import React from 'react';
import { Images, Links } from 'utils/keys';

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {};

const Footer = styled('footer')(({ theme }) => ({
  width: '100%',
  height: '175px',
  backgroundImage: `url(${Images.BOTTOM_CLOUDS_LIGHT})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat-x',
  [theme.breakpoints.up('desktopSm')]: {
    height: '425px',
    backgroundSize: '90%',
  },
  [theme.breakpoints.up('desktopLg')]: {
    height: '465px',
    backgroundSize: '50%',
  },
}));

const AppFooter: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Footer>
      {/* <Grid
        container
        justifyContent="center"
        classes={{ container: styles.mainContainer }}>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column">
            <Grid
              item
              className={styles.logo}
              component={NextLinkComposed}
              to={Links.HOME}> */}
      {/* add logo */}
      {/* </Grid>
            <Grid item className={styles.description}> */}
      {/* add store description */}
      {/* </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.gridItem}>
          <Grid container direction="column">
            <Grid item className={styles.information}>
              <Typography
                variant="h6"
                className={styles.informationText}></Typography>
            </Grid>
            <Grid item className={styles.information}> */}
      {/* Information List */}
      {/* </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Footer>
  );
};

export default AppFooter;
