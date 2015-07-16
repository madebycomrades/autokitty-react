import * as reducers from '../reducers';
import {promise,httpError,json,logger} from '../middleware';
import {createStore,combineReducers,applyMiddleware} from 'redux';

const middleware = [promise,httpError,json,logger];
const finalCreateStore = applyMiddleware(...middleware)(createStore);
const reducer = combineReducers(reducers);

export default function (initialState={}) {
  return finalCreateStore(reducer,initialState);
}
