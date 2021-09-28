import { createStore, applyMiddleware } from "redux";
import Reduxthunk from 'redux-thunk';

import rootReducer from './reducers';

export const middlewares = [Reduxthunk];

export default createStore(rootReducer, {}, applyMiddleware(...middlewares));