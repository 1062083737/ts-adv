import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YUUIntercepetors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface YUURequsetConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: YUUIntercepetors<T>
}
