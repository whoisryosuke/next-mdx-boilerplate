import React from 'react'

interface Props {
  children: React.ReactNode
}

const AboutPage: React.FC<Props> = ({ children }) => {
  return <div style={{ textAlign: 'center' }}>{children}</div>
}

export default AboutPage
