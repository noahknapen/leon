import Chatbot from '../../../app/src/js/chatbot'


describe('saveBubble()', () => {
  test('Check if bubble is saved in local storage, unencrypted', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const chatbot = new Chatbot()

    // Put the chatbot in the right state to test
    chatbot.parsedBubbles = []
    chatbot.noBubbleMessage = { classList: { contains: jest.fn(), add: jest.fn() } }
    chatbot.feed = { scrollTo: jest.fn() }

    // Call saveBubble() and check if the bubble is saved in local storage (where looking at source code reveals that the local storage is equal to parsedBubbles)
    chatbot.saveBubble('leon', 'Hello world')
    expect(chatbot.parsedBubbles).toStrictEqual([{ who: 'leon', string: 'Hello world' }])
    expect(mockSetItem).toHaveBeenCalledTimes(1)
  })
})