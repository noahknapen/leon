import Chatbot from '../../../app/src/js/chatbot'

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = String(value)
  }

  removeItem(key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()

describe('saveBubble()', () => {
  test('Check if bubble is saved in local storage, unencrypted', () => {
    const chatbot = new Chatbot()

    // Put the chatbot in the right state to test
    chatbot.parsedBubbles = []
    chatbot.noBubbleMessage = {
      classList: { contains: jest.fn(), add: jest.fn() }
    }
    chatbot.feed = { scrollTo: jest.fn() }

    // Call saveBubble() and check if the bubble is saved in local storage (where looking at source code reveals that the local storage is equal to parsedBubbles)
    chatbot.saveBubble('leon', 'Hello world')
    expect(chatbot.parsedBubbles).toStrictEqual([
      { who: 'leon', string: 'Hello world' }
    ])
    expect(localStorage.getItem('bubbles')).not.toStrictEqual([
      { who: 'leon', string: 'Hello world' }
    ])
  })
})
