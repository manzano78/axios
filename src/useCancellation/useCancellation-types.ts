import { CancelToken } from 'axios'

export type TGetCancelToken = () => CancelToken
export type TCancel = (message?: string) => void
