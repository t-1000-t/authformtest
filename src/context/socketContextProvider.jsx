import React, { createContext, useContext } from 'react'
import useAuthStore from '../store/authStore'

const SocketContext = createContext({})
// eslint-disable-next-line react/prop-types
const SocketContextProvider = ({ children }) => {
  const user = useAuthStore((state) => state.user)

  return <SocketContext.Provider value={user}>{children}</SocketContext.Provider>
}

const useSocket = () => {
  const context = useContext(SocketContext)
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider')
  }
  return context
}

export { SocketContextProvider, useSocket }
