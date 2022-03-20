import YUURequset from './requset'
import { BASE_URL, TIME_OUT } from './requset/config'

const yuuRequset = new YUURequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('实例请求成功')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('实例请求失败')
      return err
    },
    responseInterceptor: (res) => {
      console.log('实例响应成功')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('实例响应失败')
      return err
    }
  }
})

export default yuuRequset
