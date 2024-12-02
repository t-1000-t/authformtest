import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useAuthStore from '../store/authStore'
import setAxiosInterceptors from '../utils/axiosInterceptors'
import useAuthHandler from '../hooks/useAuthHandler'
import LoadingScreen from './LoadingScreen'

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

Auth.propTypes = {
  children: PropTypes.node.isRequired,
}
