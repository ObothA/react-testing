import React from 'react';

const GeussedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Try to get the secret word!</span>
    );
  }
  return <div data-test='component-guessed-words'>{contents}</div>;
};

export default GeussedWords;
