import { useNavigate } from 'react-router-dom'
import { isValidToken, setSession } from '../utils/tokenUtils'

const useAuthHandler = () => {
  const navigate = useNavigate()

  const handleAuthentication = (accessToken) => {
    if (isValidToken(accessToken)) {
      setSession(accessToken)
      navigate('/')
    }
  }

  return { handleAuthentication }
}

export default useAuthHandler
