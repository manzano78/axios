import { AxiosError } from 'axios'

export function isAxiosError<T = any>(arg: any): arg is AxiosError<T> {
  return !!arg && arg['isAxiosError'] === true
}
