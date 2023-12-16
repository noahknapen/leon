
const MAXIMUM_HEIGHT_TO_SHOW_SEE_MORE = 340

export default class Chatbot {
  constructor() {
    this.et = new EventTarget()
    this.feed = document.querySelector('#feed')
    this.typing = document.querySelector('#is-typing')
    this.noBubbleMessage = document.querySelector('#no-bubble')
  }

  async init() {
    this.scrollDown()

    this.et.addEventListener('to-leon', (event) => {
      this.createBubble('me', event.detail)
    })

    this.et.addEventListener('me-received', (event) => {
      this.createBubble('leon', event.detail)
    })
  }

  sendTo(who, string) {
    if (who === 'leon') {
      this.et.dispatchEvent(new CustomEvent('to-leon', { detail: string }))
    }
  }

  receivedFrom(who, string) {
    if (who === 'leon') {
      this.et.dispatchEvent(new CustomEvent('me-received', { detail: string }))
    }
  }

  isTyping(who, value) {
    if (who === 'leon') {
      if (value) {
        this.enableTyping()
      } else if (value === false) {
        this.disableTyping()
      }
    }
  }

  enableTyping() {
    if (!this.typing.classList.contains('on')) {
      this.typing.classList.add('on')
    }
  }

  disableTyping() {
    if (this.typing.classList.contains('on')) {
      this.typing.classList.remove('on')
    }
  }

  scrollDown() {
    this.feed.scrollTo(0, this.feed.scrollHeight)
  } 

  createBubble(who, string) {
    const container = document.createElement('div')
    const bubble = document.createElement('p')

    container.className = `bubble-container ${who}`
    bubble.className = 'bubble'
    bubble.innerHTML = string

    this.feed.appendChild(container).appendChild(bubble)

    if (container.clientHeight > MAXIMUM_HEIGHT_TO_SHOW_SEE_MORE) {
      bubble.style.maxHeight = `${MAXIMUM_HEIGHT_TO_SHOW_SEE_MORE}px`
      const showMore = document.createElement('p')
      const showMoreText = 'Show more'

      showMore.className = 'show-more'
      showMore.innerHTML = showMoreText

      container.appendChild(showMore)

      showMore.addEventListener('click', () => {
        bubble.classList.toggle('show-all')
        showMore.innerHTML =
          showMore.innerHTML === showMoreText ? 'Show less' : showMoreText
      })
    }
    this.scrollDown()
  }

}
