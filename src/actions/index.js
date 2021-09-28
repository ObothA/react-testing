import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS' 
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS
  };
}

export const getSecretWord = async () => {
  // TODO: write actual action in Redux / context
  const response = await axios.get("http://localhost:3030")
  return response.data;
};