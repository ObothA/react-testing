/* eslint-disable import/first */
import { mount } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import App from './App';

// activate global mock to make sure getSecretWord doesnt make a network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

/**
 * Set up function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  // use mount, because useEffect not called on 'shallow'
  return mount(<App/>);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // Clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });

  test('getSecretword on app mount.', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretword does not run on app update.', () => {});
    const wrapper = setup();

    // Clear mockGetSecretWord that was called on setup.
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesnt trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
});
 