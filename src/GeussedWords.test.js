import React from 'react';
import { shallow } from 'enzyme';

import GeussedWords from './GeussedWords';
import { findByTestAttr } from '../test/testUtils';

const defaultProps = {
  guessedWords: [
    {
      geussedWord: 'train',
      letterMatchCount: 3,
    },
  ],
};

/**
 * Factory function to create a ShallowWrapper for the GeussedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns  {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props,
  };
  return shallow(<GeussedWords {...setupProps} />);
};

describe('If there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('Renders without error.', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('Renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('If there are words guessed', () => {});
