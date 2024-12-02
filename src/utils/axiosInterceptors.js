import instance from './axiosInstance'

const setAxiosInterceptors = ({ onLogout }) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        if (onLogout) {
          onLogout()
        }
      }
      return Promise.reject(error)
    },
  )
}

export default setAxiosInterceptors
