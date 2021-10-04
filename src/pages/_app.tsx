import React from "react";
import type { AppProps } from "next/app";
import { store } from "src/redux/store";
import { Provider as StoreProvider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";

import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import * as theme from "theme";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const serverStyles = document.querySelector("#jss-server-side");
    if (serverStyles) {
      serverStyles.parentElement!.removeChild(serverStyles);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme.main}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
