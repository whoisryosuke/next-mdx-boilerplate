import React from 'react'
import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import MDXProvider from '../components/MDXProvider'

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => (
  <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>
)

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default App
