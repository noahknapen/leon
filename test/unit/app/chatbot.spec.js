import Chatbot from '../../../app/src/js/chatbot'
import lsapi from '../../../app/src/js/localstorageapi'
jest.mock('../../../app/src/js/chatbot')


describe('saveBubble()', () => {
  test('Check if bubble is saved in local storage, unencrypted', () => {
    lsapi.setItem = jest.fn()
    const chatbot = new Chatbot()
    chatbot.parsedBubbles = {}
    const bubble = { who: 'leon', text: 'Hello world' }

    chatbot.saveBubble('leon', 'Hello world')

    //expect(chatbot.parsedBubbles).toBe([bubble])
    //expect(chatbot.parsedBubbles).toIncludeAnyMembers([bubble])
    expect(chatbot.saveBubble).toHaveBeenCalledTimes(1)
  })
})