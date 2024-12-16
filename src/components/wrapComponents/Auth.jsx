import React, { useCallback, useEffect, useState } from 'react'
import useAuthStore from '../../store/authStore'
import setAxiosInterceptors from '../../utils/axiosInterceptors'
import useAuthHandler from '../../hooks/useAuthHandler'
import LoadingScreen from '../reusableComponents/LoadingScreen'

// eslint-disable-next-line react/prop-types
const Auth = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const { handleAuthentication } = useAuthHandler()
  const logout = useAuthStore((state) => state.logoutUser)
  const accessToken = useAuthStore((state) => state.accessToken)

  const restoreSession = useCallback(() => {
    try {
      setLoading(false)
    } catch (e) {
      setLoading(false)
      logout()
    }
  }, [logout])

  useEffect(() => {
    setAxiosInterceptors({
      onLogout: () => {
        logout()
        handleAuthentication('/')
      },
    })

    if (accessToken) {
      restoreSession()
    } else {
      setLoading(false)
    }
  }, [accessToken, restoreSession, handleAuthentication, logout])

  if (isLoading) {
    return <LoadingScreen />
  }

  return children
}

export default Auth
