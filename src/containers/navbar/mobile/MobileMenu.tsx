import React from 'react';

import { useMobileMenuStyles } from './MobileMenuStyles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {};

const MobileMenu: React.FunctionComponent<Props> = (): JSX.Element => {
  const styles = useMobileMenuStyles();

  return (
    <React.Fragment>
      <IconButton className={styles.menuButtonContainer}>
        <MenuIcon className={styles.menuButton} />
      </IconButton>
    </React.Fragment>
  );
};

export default MobileMenu;
