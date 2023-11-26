import Chatbot from '@/app/src/js/chatbot'
import { describe } from 'node:test'

describe('saveBubble()', () => {
  test('Check if bubble is saved in local storage, unencrypted', () => {
    const chatbot = new Chatbot()
    const bubble = { who: 'leon', text: 'Hello world' }
    chatbot.localStorage.setItem = jest.fn()

    chatbot.saveBubble(bubble)

    expect(chatbot.parsedBubbles).toIncludeAnyMembers([bubble])
    expect(chatbot.localStorage.setItem).toHaveBeenCalledTimes(1)
  })
})
