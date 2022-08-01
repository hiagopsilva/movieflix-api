/* eslint-disable no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios'

export const addAuthHeaders = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  return {
    ...config,
    params: {
      ...config.params
    }
  }
}

const request = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
  timeout: 20000 // 20 seconds timeout
})

request.interceptors.request.use((config) => addAuthHeaders(config))

export default request
