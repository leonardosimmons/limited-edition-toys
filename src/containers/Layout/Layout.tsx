import React from 'react';
import Head from 'next/head';

import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

import Navbar from 'src/containers/navbar';
import Footer from '../footer';

export const AppRoot = styled(Box)<BoxProps>(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  webkitTouchCallout: 'none' /* iOS Safari */,
  webkitUserSelect: 'none' /* Safari */,
  khtmlUserSelect: 'none' /* Konqueror HTML */,
  mozUserSelect: 'none' /* Old versions of Firefox */,
  msUserSelect: 'none' /* Internet Explorer/Edge */,
  userSelect: 'none',
}));

export const AppMain = styled('main')(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  margin: 0,
}));

type Props = {
  title: string;
  classes?: {
    root?: string;
    main?: string;
  };
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <AppRoot>
        <Navbar />
        <AppMain>{children}</AppMain>
        <Footer />
        <div id="top-of-site-pixel-anchor" />
      </AppRoot>
    </React.Fragment>
  );
};

export default Layout;
