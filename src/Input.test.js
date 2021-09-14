import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttr } from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the GeussedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns  {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
};

test('Input renders without error.', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

describe('State controlled input field', () => {
  test('State updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});
