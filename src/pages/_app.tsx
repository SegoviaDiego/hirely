import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </QueryClientProvider>
);

export default MyApp;
