import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Text } from '@chakra-ui/react'
import Container from './Container'
import './reusableStyle.css'

const GuestFooter = () => {
  return (
    <Container as={Stack} py={4} px={3} bg="teal.500" maxW="1440px" rounded={{ md: '2xl' }} className="guest-fc">
      <Stack direction={{ base: 'column', sm: 'row' }} justify="center" align="center" spacing={8}>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to={{ pathname: '/' }}>Home</Link>
        </Text>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to={{ pathname: '/venera' }}>Venera</Link>
        </Text>
        <Text _hover={{ textDecoration: 'underline' }}>
          <Link to={{ pathname: '/about' }}>About</Link>
        </Text>
      </Stack>
    </Container>
  )
}

export default GuestFooter
