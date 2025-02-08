import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

const Venera = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Make a GET request
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        console.log(response.data.slice(0, 5))
        setData(response.data.slice(0, 5)) // Access the "data" array
      })
      .catch((error) => {
        console.error('Error fetching the data:', error)
      })
  }, [])

  return (
    <div>
      <Flex wrap="wrap" justifyContent="center" gap="4">
        <Text p={3} color="blue.700">
          Data Array new 111
        </Text>
        <Text p={3} color="blue.700">
          Data Array new 222
        </Text>
        {data.map((item) => (
          <Card maxW="sm" key={item.id}>
            <CardBody>
              <Image src={item.url} alt="Green double couch with wooden legs" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.title}</Heading>
                <Text>{item.url}</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </div>
  )
}

export default Venera
