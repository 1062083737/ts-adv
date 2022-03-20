import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YUUIntercepetors, YUURequsetConfig } from './type'

class YUURequset {
  instance: AxiosInstance
  interceptors?: YUUIntercepetors
  constructor(config: YUURequsetConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截成功')
        return config
      },
      (err) => {
        console.log('全局请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('全局响应拦截成功')
        return config.data
      },
      (err) => {
        console.log('全局响应拦截失败')
        if (err.response.status === 404) {
          console.log(404)
        }
        return err
      }
    )
  }

  requset<T>(config: YUURequsetConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: YUURequsetConfig<T>): Promise<T> {
    return this.requset({ ...config, method: 'GET' })
  }
  post<T>(config: YUURequsetConfig<T>): Promise<T> {
    return this.requset({ ...config, method: 'POST' })
  }
  detele<T>(config: YUURequsetConfig<T>): Promise<T> {
    return this.requset({ ...config, method: 'DELETE' })
  }
  patch<T>(config: YUURequsetConfig<T>): Promise<T> {
    return this.requset({ ...config, method: 'PATCH' })
  }
}

export default YUURequset
