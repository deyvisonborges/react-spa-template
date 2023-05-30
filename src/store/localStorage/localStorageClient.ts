const global: Record<string, string> = {}

const getItem = (key: string) => {
  try {
    if (window.localStorage) {
      return localStorage?.getItem(key)
    }
    return global[key]
  } catch (error) {
    return global[key]
  }
}

const setItem = (key: string, value: string) => {
  try {
    if (window.localStorage) {
      localStorage.setItem(key, value)
    } else {
      global[key] = value
    }
  } catch (error) {
    global[key] = value
  }
}

const removeItem = (key: string) => {
  try {
    if (window.localStorage) {
      localStorage.removeItem(key)
    } else {
      delete global[key]
    }
  } catch (error) {
    delete global[key]
  }
}

const getStorage = () => {
  try {
    if (window.localStorage) {
      return localStorage
    }
    return global
  } catch (error) {
    return global
  }
}

export const localStorageClient = {
  getItem,
  setItem,
  removeItem,
  getStorage
}
