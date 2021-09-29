module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  getSecretWord: jest.fn().mockReturnValue({
    type: 'mock'
  }),
};

// check package json jest config to stop react resetting return value