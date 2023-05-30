import { localStorageKeys } from 'store/localStorage/keys'
import { localStorageClient } from 'store/localStorage/localStorageClient'
import { create } from 'zustand'

type State = {
  token: string
  addToken: (value: string) => void
  clear: () => void
}

export const useAuthModule = create<State>((set) => ({
  token:
    (localStorageClient.getItem(localStorageKeys.ACCESS_TOKEN) as string) || '',
  addToken: (value: string) => {
    set(() => {
      localStorageClient.setItem(localStorageKeys.ACCESS_TOKEN, value)
      return { token: value }
    })
  },
  clear: () => {
    set(() => {
      localStorageClient.removeItem(localStorageKeys.ACCESS_TOKEN)
      return { token: '' }
    })
  }
}))
