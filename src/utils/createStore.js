import * as reducers from '../reducers';
import {fetch, logger} from '../middleware';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const middleware = [fetch, logger];
const finalCreateStore = applyMiddleware(...middleware)(createStore);
const reducer = combineReducers(reducers);

export default function (initialState={}) {
  return finalCreateStore(reducer, initialState);
}
