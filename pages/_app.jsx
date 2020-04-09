import React from 'react'
import MDXProvider from '../components/MDXProvider'
import ThemeProvider from '../components/ThemeProvider'

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  </ThemeProvider>
)
