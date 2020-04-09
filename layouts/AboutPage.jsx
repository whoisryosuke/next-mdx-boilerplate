import React from 'react'
import { Box } from '@chakra-ui/core'
import Header from '../components/Header'

export default function AboutPage({ children }) {
  return (
    <main>
      <Header />
      <Box p={3} textAlign="center">
        {children}
      </Box>
    </main>
  )
}
