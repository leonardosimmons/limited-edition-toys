import React from 'react';
import { store } from 'src/redux';
import type { AppProps } from 'next/app';
import { Provider as StoreProvider } from 'react-redux';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import * as theme from 'theme';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

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
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <Component {...pageProps} />
            </StyledEngineProvider>
          </ThemeProvider>
        </StoreProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
