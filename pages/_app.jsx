import React from 'react'
import MDXProvider from '../components/MDXProvider'
import ThemeProvider from '../components/ThemeProvider'
import { AnimatePresence } from 'framer-motion'

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MDXProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </MDXProvider>
  </ThemeProvider>
)
