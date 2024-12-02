const clearSession = () => {
  localStorage.removeItem('auth')
  sessionStorage.clear()
}

export default clearSession
