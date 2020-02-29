import { createContext } from '@manzano/component-utils'
import { AxiosInstance } from 'axios'
import React from 'react'

import { IAxiosProviderProps } from './Axios-types'
import { useController } from './Axios-controller'

const [AxiosInstanceProvider, useAxios] = createContext<AxiosInstance>()

function AxiosProvider({ defaultConfig, children }: IAxiosProviderProps) {
  const { axiosInstance } = useController(defaultConfig)

  return (
    <AxiosInstanceProvider value={axiosInstance}>
      {children}
    </AxiosInstanceProvider>
  )
}

export { AxiosProvider, useAxios }
