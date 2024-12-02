import { logoutAuth, noteDelete, noteUp, signIn, signUp } from './authApi'

export const singUpUser = async (data) => {
  const { user, idAvatar } = await signUp(data)
  return { user, idAvatar, redirect: '/' }
}

export const loginUser = async (username, password) => {
  const { accessToken, user } = await signIn(username, password)
  return { accessToken, user, redirect: '/' }
}

export const noteService = (data) => {
  return noteUp(data)
}

export const deleteNoteService = (id) => {
  return noteDelete(id)
}

export const logoutUser = async (id) => {
  await logoutAuth(id)
}
