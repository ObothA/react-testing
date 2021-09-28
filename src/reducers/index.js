import { combineReducers } from "redux";
import success from './successReducer';
import guessedWords from './guessedWordReducer';
import secretWord from './secretWordsReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord
});