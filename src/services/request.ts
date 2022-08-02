/* eslint-disable no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
  timeout: 20000 // 20 seconds timeout
})

export default request
