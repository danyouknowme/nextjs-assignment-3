import type { AppProps } from 'next/app';
import { Navbar } from '../components';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
