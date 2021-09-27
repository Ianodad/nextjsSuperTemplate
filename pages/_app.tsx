/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

import type { AppProps } from 'next/app';

// import '../styles/tailwind.css'
import {wrapper} from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
