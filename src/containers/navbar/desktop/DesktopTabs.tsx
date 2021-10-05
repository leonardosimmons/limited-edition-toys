import React from "react";

import useDesktopTabStyles from "./DesktopTabStyles";

import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FaceTwoTone from "@material-ui/icons/FaceTwoTone";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

type Props = {};

const DesktopTabs: React.FunctionComponent<Props> = (): JSX.Element => {
  const styles = useDesktopTabStyles();

  return (
    <React.Fragment>
      <Button startIcon={<AssignmentTwoToneIcon />} className={styles.button}>
        Wishlist
      </Button>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <Button startIcon={<FaceTwoTone />} className={styles.button}>
        My Account
      </Button>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <IconButton aria-label="shopping cart" size="small">
        <ShoppingCartTwoToneIcon fontSize="inherit" />
      </IconButton>
    </React.Fragment>
  );
};

export default DesktopTabs;
