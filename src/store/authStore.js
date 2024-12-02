import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { signUp, signIn, logoutAuth, noteUp, noteDelete } from '../services/authApi'
import clearSession from '../utils/storeUtils'
import { logError } from '../utils/generalUtils'

const store = (set) => ({
  accessToken: null,
  user: null,
  redirect: null,
  list: null,
  signUpUser: async (data) => {
    const { user, idAvatar, redirect } = await signUp(data)
    set({ user, idAvatar, redirect })
  },
  loginUser: async (username, password) => {
    const { user, accessToken, redirect } = await signIn(username, password)
    set({ user, accessToken, redirect })
  },
  noteTextService: async (data) => {
    try {
      const list = await noteUp(data)
      set({ text: data.text, list: list.notes })
      return null
    } catch (e) {
      logError(e)
      return null
    }
  },
  deleteNoteService: async (id) => {
    try {
      return await noteDelete(id)
    } catch (e) {
      logError(e)
      return null
    }
  },
  logoutUser: async (id) => {
    set({ accessToken: null, user: null, redirect: null })
    await logoutAuth(id)
    clearSession()
  },
  setNoteList: (notes) => {
    set({ list: notes })
  },
  setToken: (token) => {
    set({ accessToken: token })
  },
})

const useAuthStore = create(
  persist(store, {
    name: 'auth',
    partialize: (state) => ({
      user: state.user,
      accessToken: state.accessToken,
    }),
  }),
)

export default useAuthStore
