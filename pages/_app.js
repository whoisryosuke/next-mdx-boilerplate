import React from 'react'
import MDXProvider from '../components/MDXProvider'


export default ({Component, pageProps}) => (
  <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>
)