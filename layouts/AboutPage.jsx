import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/core'
import Header from '../components/Header'

export default function AboutPage({ children }) {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header />
      <Box p={3} textAlign="center">
        {children}
      </Box>
    </motion.main>
  )
}
