import React from "react";
import { Provider as StoreProvider } from "react-redux";
import type { AppProps } from "next/app";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import * as theme from "theme";
import { store } from "src/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const serverStyles = document.querySelector("#jss-server-side");
    if (serverStyles) {
      serverStyles.parentElement!.removeChild(serverStyles);
    }
  }, []);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme.main}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
