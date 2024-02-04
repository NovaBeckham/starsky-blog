/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-02-01 14:18:40
 */

import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

const requests = axios.create({
  timeout: 10000,
})

requests.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers["Authorization"] =
      "Bearer " + sessionStorage.getItem("token")
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

requests.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.flag) {
      return response.data
    }
    switch (response.data.code) {
      case 500:
        console.log("系统异常", response.data.message)
        break
      case 401:
        console.log("用户未登录", response.data.message)
        break
    }
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default requests
