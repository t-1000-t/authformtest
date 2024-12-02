import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API, // Set base URL from environment variables
})

export default instance
