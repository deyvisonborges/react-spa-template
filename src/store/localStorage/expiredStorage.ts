import { LocalStorageKeys } from './keys'

function setWithExpiry(
  key: string | LocalStorageKeys,
  value: string,
  expirationTime: number
) {
  const now = new Date()

  const item = {
    value,
    expiry: now.getTime() + expirationTime
  }

  localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key: string | LocalStorageKeys) {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) return null

  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key)
    return null
  }
  return item.value
}

export const expiredStorage = { setWithExpiry, getWithExpiry }
