import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Input from './Input';
import { findByTestAttr, storeFactory } from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the GeussedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns  {ShallowWrapper}
 */
const setup = (initialState={}, secretWord='party') => {
  const store = storeFactory(initialState);
  return mount(<Provider store={store}><Input secretWord={secretWord}/></Provider>);
};

describe('Render', () => {
  describe('Success is true.', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test('Input renders without error.', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('Input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('Submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('Success is false.', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test('Input renders without error.', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('Input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('Submit button shows', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe('State controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup({ success: false });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test('State updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('currentGuess is cleared on submitting', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
