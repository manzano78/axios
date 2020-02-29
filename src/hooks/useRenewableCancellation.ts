import Axios, { Canceler, CancelToken } from 'axios'
import { useAttribute, useFinalCallback } from '@manzano/component-utils'
import { useEffect } from 'react'

export function useRenewableCancellation(): [() => CancelToken, Canceler] {
  const [getSource, setSource] = useAttribute(Axios.CancelToken.source)
  const getCancelToken = useFinalCallback(() => {
    const { token } = getSource()

    return token
  })

  const cancel = useFinalCallback((message?: string) => {
    const { cancel } = getSource()

    cancel(message)
    setSource(Axios.CancelToken.source())
  })

  useEffect(() => cancel, [])

  return [getCancelToken, cancel]
}
