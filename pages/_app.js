import React from 'react';
import { wrapper } from '../redux';

function HRMApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(HRMApp);
