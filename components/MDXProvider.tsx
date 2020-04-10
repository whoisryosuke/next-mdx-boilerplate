import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const mdComponents = {
  h1: (props: JSX.IntrinsicElements['h1']): React.ReactElement => (
    <h1 style={{ color: 'green' }} {...props} />
  ),
}

interface Props {
  children: React.ReactNode
}

const ComponentProvider: React.FC<Props> = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)

export default ComponentProvider
