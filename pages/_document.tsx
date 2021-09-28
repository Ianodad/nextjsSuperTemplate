/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import theme from '../src/utils/theme';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="apple-touch-icon" href="/apple-touch-icon"/> */}
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#fff" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>
        <body>
          <ThemeProvider theme={theme}>
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (WrappedComponent) => (props) => sheets.collect(<WrappedComponent {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
export default MyDocument;
