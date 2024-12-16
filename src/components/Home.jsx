import React from 'react'
import { Box, Button, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import Container from './reusableComponents/Container'

const MotionButton = motion(Button)

// TODO AuthFormSection //
const Home = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const user = useAuthStore((state) => state.user)

  console.log('accessToken', accessToken)
  console.log('user', user)

  return (
    <Container position="relative" mb={{ base: 36, md: 0 }}>
      <Stack direction={{ base: 'column', md: 'row' }} pb={16}>
        <Flex p={{ base: 4, md: 8 }} pl={0} flex={1} align="center" justify="center" mt={16}>
          <Stack spacing={4} justify={{ base: 'center', md: 'start' }} w={{ md: 'full' }}>
            <Box>
              <Heading as="h1" fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} textColor="#2D81A5" m={0} p={0}>
                From for test AUTH
              </Heading>
              <Text fontSize={{ base: 'lg', lg: 'xl' }} color="teal.500">
                Just need to fill out the request form, please
              </Text>
            </Box>
            <MotionButton
              colorScheme="teal"
              w={56}
              py={8}
              as="a"
              size="lg"
              fontSize="3xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/signup">Make Now</Link>
            </MotionButton>
          </Stack>
        </Flex>
        <Flex flex={1} justify="center" align="center" position="relative" overflow="hidden">
          <Image
            alt="Login image"
            objectFit="cover"
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8' +
              'fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default Home
