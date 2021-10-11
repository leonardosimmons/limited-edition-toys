import React from 'react';
import { store } from 'src/redux';
import type { AppProps } from 'next/app';
import { Provider as StoreProvider } from 'react-redux';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import * as theme from 'theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import StylesProvider from '@material-ui/styles/StylesProvider';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState<QueryClient>(() => new QueryClient());

  React.useEffect(() => {
    const serverStyles = document.querySelector('#jss-server-side');
    if (serverStyles) {
      serverStyles.parentElement!.removeChild(serverStyles);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StoreProvider store={store}>
          <ThemeProvider theme={theme.main}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </ThemeProvider>
        </StoreProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
