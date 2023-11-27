import lsapi from './localstorageapi'

let index = -1
let parsedHistory = null

const onkeydowninput = (e, client) => {
  const key = e.which || e.keyCode

  if (lsapi.getItem('history') !== null && (key === 38 || key === 40)) {
    parsedHistory = lsapi.getItem('history').reverse()
  }

  if (key === 13) {
    if (client.send('utterance')) {
      parsedHistory = lsapi.getItem('history').reverse()
      index = -1
    }
  } else if (lsapi.getItem('history') !== null) {
    if (key === 38 && index < parsedHistory.length - 1) {
      index += 1
      client.input = parsedHistory[index]
    } else if (key === 40 && index - 1 >= 0) {
      index -= 1
      client.input = parsedHistory[index]
    } else if (key === 40 && index - 1 < 0) {
      client.input = ''
      index = -1
    }
  }
}

const onkeydowndocument = (e, cb) => {
  if (e.altKey && e.key === 'c') {
    cb()
  }
}

export { onkeydowninput, onkeydowndocument }
