import React from 'react';

import { useMobileMenuStyles } from '../MobileMenuStyles';

import Toolbar from '@material-ui/core/Toolbar';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

type Props = {
  drawerToggle: (
    open: boolean,
  ) => (e: React.KeyboardEvent | React.MouseEvent) => void;
};

const MobileMenuTabs: React.FunctionComponent<Props> = ({
  drawerToggle,
}): JSX.Element => {
  const styles = useMobileMenuStyles();

  return (
    <Toolbar disableGutters>
      <Zoom in appear unmountOnExit>
        <IconButton className={styles.menuButtonContainer}>
          <ShoppingCartIcon className={styles.menuButton} />
        </IconButton>
      </Zoom>
      <Zoom in appear unmountOnExit>
        <IconButton
          className={styles.menuButtonContainer}
          onClick={drawerToggle(true)}>
          <MenuIcon className={styles.menuButton} />
        </IconButton>
      </Zoom>
    </Toolbar>
  );
};

export default MobileMenuTabs;
