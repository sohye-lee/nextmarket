import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Head from 'next/head';
let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kloe</title>
        <meta
          name="description"
          content="Eco friendly market for all used goods"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ad8989" />
        <meta name="msapplication-TileColor" content="#dfcaca" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
