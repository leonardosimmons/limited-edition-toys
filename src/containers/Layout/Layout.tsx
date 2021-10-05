import React from "react";
import Head from "next/head";

import useLayoutStyles from "./LayoutStyles";

import Box from "@material-ui/core/Box";
import Navbar from "src/containers/navbar";

type Props = {
  title: string;
  classes?: {
    root?: string;
    main?: string;
  };
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  classes,
  children,
}): JSX.Element => {
  const styles = useLayoutStyles();

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Box
        className={
          classes
            ? classes.root && `${styles.root} ${classes.root}`
            : styles.root
        }
      >
        <Navbar />
        <main
          className={
            classes
              ? classes.main && `${styles.main} ${classes.main}`
              : styles.main
          }
        >
          {children}
        </main>
        {/* FOOTER */}
        <div id="top-of-site-pixel-anchor" />
      </Box>
    </React.Fragment>
  );
};

export default Layout;
