import instance from './axiosInstance'

const removeToken = () => {
  delete instance.defaults.headers.common.Authorization
}

export default removeToken
