import { jwtDecode } from 'jwt-decode'
import instance from './axiosInstance'

export const isValidToken = (accessToken) => {
  if (!accessToken) return false

  const decoded = jwtDecode(accessToken)
  const currentTime = Date.now() / 1000
  return decoded.exp > currentTime
}

export const setSession = (accessToken) => {
  if (accessToken) {
    instance.defaults.headers.common.token = accessToken
    // instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  } else {
    // instance.defaults.headers.common.token = null
    delete instance.defaults.headers.common.Authorization
  }
}
