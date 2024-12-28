import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Text } from '@chakra-ui/react'
import Container from './Container'

const GuestFooter = () => {
  return (
    <Container as={Stack} py={4} bg="teal.500" maxW="1440px" rounded={{ md: '2xl' }}>
      <Stack direction={{ base: 'column', sm: 'row' }} justify="center" align="center" spacing={8} color="black">
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to={{ pathname: '/' }}>Home</Link>
        </Text>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to={{ pathname: '/about' }}>About</Link>
        </Text>
      </Stack>
    </Container>
  )
}

export default GuestFooter
