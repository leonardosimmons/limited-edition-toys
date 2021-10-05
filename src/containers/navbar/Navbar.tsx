import React from "react";
import { useRouter } from "next/router";
import { Images } from "utils/keys";

import Image from "next/Image";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useNavbarStyles from "./NavbarStyles";
import ElevationScroll from "src/helpers/ElevationScroll";
import DesktopTabs from "./desktop/DesktopTabs";

const Navbar: React.FunctionComponent = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const styles = useNavbarStyles();
  const desktop = useMediaQuery(theme.breakpoints.up("desktopSm"));

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        aria-label="Main header"
        className={styles.navbar}
      >
        <Toolbar disableGutters>
          {desktop && (
            <Box className={styles.promoBox} aria-label="promotional box">
              <Image
                src={Images.NAVBAR_PROMO}
                alt={"promo image"}
                height={100}
                width={200}
                role="img"
              />
            </Box>
          )}
          <Typography
            variant="h1"
            className={styles.title}
            aria-label="Main Heading"
          >
            <span>{"LIMITED EDITION"}</span>
            <span>{"Toys"}</span>
          </Typography>
          <Box className={styles.menuBox}>{desktop ? <DesktopTabs /> : ""}</Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
