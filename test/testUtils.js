import { createStore, applyMiddleware } from "redux";

import rootReducer from '../src/reducers';
import { middlewares } from "../src/configureStore";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @function
 * @param {object} initialState - Initial state for store 
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}

/**
 *
 * @param {ShallowRwapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of the data-test attribute to search for
 * @returns {ShallowRwapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};


