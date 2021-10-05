import React from "react";
import { store } from "src/store";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import * as theme from "theme";
import StylesProvider from "@material-ui/styles/StylesProvider";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

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
