import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
