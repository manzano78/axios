import { useCallback, useEffect, useMemo, useState } from 'react'
import Axios, { CancelTokenSource } from 'axios'

export function useRenewableCancelTokenSource() {
  const [{ token, cancel: applyCancellation }, setSource] = useState(
    Axios.CancelToken.source
  )

  const cancel = useCallback(
    (message?: string) => {
      applyCancellation(message)
      setSource(Axios.CancelToken.source())
    },
    [applyCancellation]
  )

  useEffect(() => applyCancellation, [applyCancellation])

  return useMemo((): CancelTokenSource => ({ token, cancel }), [token, cancel])
}
