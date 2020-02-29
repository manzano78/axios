import Axios from 'axios'

import { useFinalAttribute } from '@manzano/component-utils'
import { useLayoutEffect, useState } from 'react'
import { AxiosInstanceProviderProps } from './AxiosInstanceContext-types'
import {
  addInterceptors,
  removeInterceptors
} from './AxiosInstanceContext-utils'

export function useController(props: AxiosInstanceProviderProps) {
  const { config, requestInterceptors, responseInterceptors, children } = props
  const axiosInstance = useFinalAttribute(() => Axios.create(config))
  const [areInterceptorsInitialized, setAreInterceptorsInitialized] = useState(
    () => !(requestInterceptors || responseInterceptors)
  )

  useLayoutEffect(() => {
    if (!areInterceptorsInitialized) {
      const requestInterceptorIds: number[] = []
      const responseInterceptorIds: number[] = []

      addInterceptors(
        axiosInstance,
        axiosInstance.interceptors.request,
        requestInterceptorIds,
        requestInterceptors
      )

      addInterceptors(
        axiosInstance,
        axiosInstance.interceptors.response,
        responseInterceptorIds,
        responseInterceptors
      )

      setAreInterceptorsInitialized(true)

      return () => {
        removeInterceptors(
          axiosInstance.interceptors.request,
          requestInterceptorIds
        )

        removeInterceptors(
          axiosInstance.interceptors.response,
          responseInterceptorIds
        )
      }
    }

    return
  }, [])

  return { axiosInstance, areInterceptorsInitialized, children }
}
