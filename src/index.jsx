import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import process from 'process'
import App from './App'
import { SocketContextProvider } from './context/socketContextProvider'

window.process = process

const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = extendTheme({
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Montserrat', sans-serif",
  },
})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
