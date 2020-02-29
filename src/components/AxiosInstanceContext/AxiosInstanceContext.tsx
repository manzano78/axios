import { createContext } from '@manzano/component-utils'
import { AxiosInstance } from 'axios'
import React from 'react'

import { AxiosInstanceProviderProps } from './AxiosInstanceContext-types'
import { useController } from './AxiosInstanceContext-controller'

const [AxiosInstanceContextProvider, useAxiosInstance] = createContext<
  AxiosInstance
>()

function AxiosInstanceProvider(props: AxiosInstanceProviderProps) {
  const { children, axiosInstance, areInterceptorsInitialized } = useController(
    props
  )

  return (
    <AxiosInstanceContextProvider value={axiosInstance}>
      {areInterceptorsInitialized && children}
    </AxiosInstanceContextProvider>
  )
}

export { AxiosInstanceProvider, useAxiosInstance }
