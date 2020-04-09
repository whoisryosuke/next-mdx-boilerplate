import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: green;
`

const mdComponents = {
  h1: props => <Heading {...props} />,
  h2: props => <Heading as="h2" {...props} />,
  h3: props => <Heading as="h3" {...props} />
}

export default ({children}) => (
  <MDXProvider components={mdComponents}>
    {children}
  </MDXProvider>
)