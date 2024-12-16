import React from 'react'
import { Box } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const Container = ({ children, ...styles }) => {
  return (
    <Box display="flex" flexDirection="column" maxW="1440" mx="auto" {...styles}>
      {children}
    </Box>
  )
}

export default Container
