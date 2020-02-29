import { useAttribute, useFinalCallback } from '@manzano/component-utils'
import Axios from 'axios'
import { TCancel, TGetCancelToken } from './useCancellation-types'

export function useCancellation(): [TGetCancelToken, TCancel] {
  const [getSource, setSource] = useAttribute(Axios.CancelToken.source)
  const getCancelToken = useFinalCallback(() => {
    const source = getSource()

    return source.token
  })

  const cancel = useFinalCallback((message?: string) => {
    const source = getSource()

    setSource(Axios.CancelToken.source())

    source.cancel(message)
  })

  return [getCancelToken, cancel]
}
