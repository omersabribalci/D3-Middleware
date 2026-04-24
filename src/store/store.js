import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // default import
import logger from 'redux-logger';

export const myStore = createStore(rootReducer, applyMiddleware(logger));
