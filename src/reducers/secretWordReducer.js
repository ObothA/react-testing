/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from "../actions";

/**
 * @function secretWordReducer
 * @param {string} state - State before the reducer
 * @param {object} action - Action sent to reducer
 * @returns {string} - New state {secret word payload from action}.
 */
export default (state='', action) => {
  switch(action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload
      
    default:
      return state;
  }
}