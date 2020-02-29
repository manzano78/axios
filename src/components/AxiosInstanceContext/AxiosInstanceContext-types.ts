import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ReactNode } from 'react'

export interface AxiosInstanceProviderProps {
  config?: AxiosRequestConfig
  requestInterceptors?: Array<Interceptor<AxiosRequestConfig>>
  responseInterceptors?: Array<Interceptor<AxiosResponse>>
  children?: ReactNode | ((axiosInstance: AxiosInstance) => ReactNode)
}

export interface FinalInterceptor<V> {
  onFulfilled?: (value: V) => V | Promise<V>
  onRejected?: (error: any) => any
}

export type Interceptor<V> =
  | FinalInterceptor<V>
  | ((
      axiosInstance: AxiosInstance,
      getInterceptorId: () => number
    ) => FinalInterceptor<V>)
