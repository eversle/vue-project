import axios from 'axios'
import { ipConfig } from './ipConfig'

const defaultConfig = {
  timeout: 5 * 1000,
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}
const instance = axios.create(Object.assign({}, defaultConfig));

instance.interceptors.request.use((config) => {
  if (config.headers['baseUrl']) {
    config.baseURL = ipConfig[config.headers['baseUrl']]()

  }

  return config
})


instance.interceptors.response.use()

export default instance