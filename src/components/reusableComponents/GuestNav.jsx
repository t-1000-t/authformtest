import React from 'react'
import { Box, Button, Flex, Stack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from './Container'

const MotionButton = motion(Button)

const GuestNav = () => {
  return (
    <Container>
      <Flex mx="auto" justify="space-between" py={2} align="center">
        <Link to="/">
          <Flex align="center">
            <Box h={20}>
              <Image src="/images/motherland.svg" h={{ base: 12, md: 20 }} mt={{ base: 4, md: 0 }} />
            </Box>
          </Flex>
        </Link>
        <Stack direction="row" spacing={6}>
          <MotionButton
            as={Link}
            to="/signup"
            colorScheme="teal"
            px={{ base: 4, md: 8 }}
            py={{ base: 2, md: 6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            fontSize={{ base: 'md', md: 'xl' }}
          >
            Sign Up
          </MotionButton>
          <MotionButton
            as={Link}
            to="/login"
            colorScheme="gray"
            color="teal.400"
            px={{ base: 4, md: 8 }}
            py={{ base: 2, md: 6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            fontSize={{ base: 'md', md: 'xl' }}
          >
            Login
          </MotionButton>
        </Stack>
      </Flex>
    </Container>
  )
}

export default GuestNav
