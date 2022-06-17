import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
