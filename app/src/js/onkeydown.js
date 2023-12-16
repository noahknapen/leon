

const onkeydowninput = (e, client) => {

}

const onkeydowndocument = (e, cb) => {
  if (e.altKey && e.key === 'c') {
    cb()
  }
}

export { onkeydowninput, onkeydowndocument }
