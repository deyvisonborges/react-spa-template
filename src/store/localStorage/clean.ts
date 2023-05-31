import { localStorageKeys } from './keys'
import { localStorageClient } from './localStorageClient'

export function cleanLocalStorage() {
  Object.keys(localStorageClient.getStorage()).forEach((key) => {
    if (!key.includes('persist@app')) {
      localStorageClient.removeItem(key)
    }
  })
}

export function clearSessionDataInStorage() {
  localStorageClient.removeItem(localStorageKeys.ACCESS_TOKEN)
}
