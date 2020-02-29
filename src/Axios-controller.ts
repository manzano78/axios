import Axios, { AxiosRequestConfig } from 'axios'

import { useFinalAttribute } from '@manzano/component-utils'

export function useController(defaultConfig?: AxiosRequestConfig) {
  const axiosInstance = useFinalAttribute(() => Axios.create(defaultConfig))

  return { axiosInstance }
}
