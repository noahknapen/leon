import ls from 'localstorage-slim'

export default class LocalStorageAPI {
  static setItem(key, data) {
    ls.set(key, data, { encrypt: true })
  }

  static getItem(key) {
    return ls.get(key, { decrypt: true })
  }
}
