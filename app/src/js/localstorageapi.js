import ls from 'localstorage-slim'
import encUTF8 from 'crypto-js/enc-utf8'
import AES from 'crypto-js/aes'

export default class LocalStorageAPI {
  static setItem(key, data) {
    LocalStorageAPI.configureLs()
    ls.set(key, data)
  }

  static getItem(key) {
    LocalStorageAPI.configureLs()
    return ls.get(key)
  }

  static configureLs() {
    ls.config.encrypt = true
    ls.config.secret = 'leon'

    ls.config.encrypter = (data, secret) =>
      AES.encrypt(JSON.stringify(data), secret).toString()

    ls.config.decrypter = (data, secret) => {
      try {
        return JSON.parse(AES.decrypt(data, secret).toString(encUTF8))
      } catch (e) {
        // incorrect/missing secret, return the encrypted data instead
        return data
      }
    }
  }
}
