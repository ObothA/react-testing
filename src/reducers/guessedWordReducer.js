/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from "../actions";

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - Action to be reduced
 * @returns {array} - New guessed words state
 */
export default (state=[], action) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};