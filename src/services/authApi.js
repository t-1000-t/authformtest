import instance from '../utils/axiosInstance'
import { setSession } from '../utils/tokenUtils'

export const signIn = async (name, password) => {
  const response = await instance.post('/api/auth/login', {
    email: name,
    password,
  })
  const { token, userData, userId } = await response.data

  setSession(token)

  const user = {
    userId,
    username: userData.username,
    score: Math.round(2000) || 300,
    userData,
    status: userData.role === 'admin' ? 'admin' : userData.role === 'user',
    isAdmin: userData.role === 'admin',
  }

  return { user, accessToken: token }
}

export const signUp = async ({ username, surname, email, password, role, avatar, message }) => {
  const response = await instance.post('/api/auth/signup', {
    username,
    surname,
    email,
    password,
    role,
    avatar,
    message,
  })

  const { userData, token } = response.data
  setSession(token)

  userData.status = userData.role === 'admin' ? 'admin' : userData.role
  userData.isAdmin = userData.role === 'admin'

  return { user: userData, accessToken: token }
}

export const noteUp = async (data) => {
  const result = await instance.post('api/auth/notes', data)
  return result.data
}

export const noteDelete = async (id) => {
  const { status, statusText } = await instance.delete(`api/auth/notes/${id}`)
  return { status, statusText }
}

export const logoutAuth = async (id) => {
  await instance.post('/api/auth/logout', { userId: id })
}
