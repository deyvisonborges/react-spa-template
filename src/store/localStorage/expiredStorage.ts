import { localStorageKeys } from './keys'

type StorageKeys = keyof typeof localStorageKeys
type ItemType = {
  value: string
  expiry?: number
}

export const ExpiredStorage = {
  setItemWithExpiry(key: StorageKeys, value: string, ttl: number) {
    const now = new Date()
    const item: ItemType = {
      value,
      ...(ttl !== 0 && {
        expiry: now.getTime() + ttl
      })
    }

    localStorage.setItem(key, JSON.stringify(item))
  },

  getItemWithExpiry(key: StorageKeys) {
    const item = JSON.parse(localStorage.getItem(key) as string) as ItemType
    const now = new Date()

    if (!item) return null

    if (item.expiry) {
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
      }
    }

    return item.value
  }
}
