import { useFinalAttribute } from '@manzano/component-utils'
import Axios from 'axios'
import { useEffect } from 'react'

export function useFinalCancelTokenSource() {
  const cancelTokenSource = useFinalAttribute(Axios.CancelToken.source)

  useEffect(() => cancelTokenSource.cancel, [])

  return cancelTokenSource
}
