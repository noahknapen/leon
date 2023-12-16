const onkeydowninput = (e, client) => {
  const key = e.which || e.keyCode

  if (key === 13) {
    client.send('utterance')
  }
}

const onkeydowndocument = (e, cb) => {
  if (e.altKey && e.key === 'c') {
    cb()
  }
}

export { onkeydowninput, onkeydowndocument }
