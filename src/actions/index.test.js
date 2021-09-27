import moxios from 'moxios';

import { getSecretWord } from './';

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