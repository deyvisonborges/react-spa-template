export const localStorageKeys = {
  ACCESS_TOKEN: '@app/access-token',
  REFRESH_TOKEN: '@app/refresh-token'
}

export type LocalStorageKeys = keyof typeof localStorageKeys
