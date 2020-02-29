import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ReactNode } from 'react'

export interface IAxiosProviderProps {
  defaultConfig?: AxiosRequestConfig
  children?: ReactNode | ((axiosInstance: AxiosInstance) => ReactNode)
}
