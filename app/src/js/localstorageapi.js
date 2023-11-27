import ls from 'localstorage-slim'

export default class LocalStorageAPI {
  static setItem(key, data) {
    console.log('data', data)
    ls.set(key, data, { encrypt: true })
  }

  static getItem(key) {
    const decrypted = ls.get(key, { decrypt: true })
    console.log('decrypted', decrypted)
    return decrypted
  }
}
