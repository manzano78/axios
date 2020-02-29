import { AxiosInstance, AxiosInterceptorManager } from 'axios'
import { Interceptor } from './AxiosInstanceContext-types'

export function addInterceptors<V>(
  axiosInstance: AxiosInstance,
  interceptorManager: AxiosInterceptorManager<V>,
  interceptorIds: number[],
  interceptors?: Array<Interceptor<V>>
) {
  if (interceptors) {
    interceptors.forEach((interceptor) => {
      const { onFulfilled, onRejected } =
        typeof interceptor === 'function'
          ? interceptor(axiosInstance, () => interceptorId)
          : interceptor

      const interceptorId = interceptorManager.use(onFulfilled, onRejected)

      interceptorIds.push(interceptorId)
    })
  }
}

export function removeInterceptors(
  interceptorManager: AxiosInterceptorManager<any>,
  interceptorIds: number[]
) {
  interceptorIds.forEach((interceptorId) => {
    interceptorManager.eject(interceptorId)
  })
}
