import moxios from 'moxios';

import { getSecretWord, correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('Returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });

}) ;

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned.', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    // update to test app in Redux / context sections

    // promises
    // return getSecretWord()
    //   .then((secretWord) => {
    //     expect(secretWord).toBe('party');
    //   });

    const secretWord = await getSecretWord();
    expect(secretWord).toBe('party');

  });

});