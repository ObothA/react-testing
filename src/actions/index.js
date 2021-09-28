import axios from 'axios';

import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};


/**
 * @function guessWord
 * @param {string} guessedWord 
 * @returns {function} Redux Thunk  function
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { 
        guessedWord,
        letterMatchCount
       }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
};

export const getSecretWord = async () => {
  // TODO: write actual action in Redux / context
  const response = await axios.get("http://localhost:3030")
  return response.data;
};



/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
// export function correctGuess() {
//   return {
//     type: actionTypes.CORRECT_GUESS
//   };
// }