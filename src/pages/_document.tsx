import React from "react";
import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets";
import Document, { Html, Head, Main, NextScript } from "next/document";

import * as theme from "theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.main.palette.primary.main} />
          <link rel="shortcut icon" href="/assets/favicon.png" />
          <meta name="description" content="Project Astoria main site" />
          <meta name="robots" content="no index, no follow" />
          <meta name="AdsBot-Google" content="none" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Pacifico|Jost:600,700|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
