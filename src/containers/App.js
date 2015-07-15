import React from 'react';
import AppContainer from './app/AppContainer';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';
import * as projectActions from '../actions/projectActions';
import * as locationActions from '../actions/locationActions';
import {promise,httpError,json,logger} from '../middleware';
import {locationStream,transitionTo,reverse} from '../utils/location';
import storeStream from '../utils/storeStream';
import routes from '../routes';

const middleware = [promise,httpError,json,logger];
const finalCreateStore = applyMiddleware(...middleware)(createStore);
const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer/*,initialState*/);

const state$ = storeStream(store);
const location$ = locationStream(routes);

location$
  .subscribe(location => {
    store.dispatch(locationActions.updateLocation(location));
  });

location$
  .filter(location => !location.path.startsWith('/project/'))
  .subscribe(location => {
    store.dispatch(projectActions.resetProject());
  });

state$
  .filter(state => state.location.path.startsWith('/project/'))
  .filter(state => state.project._id !== state.location.params.projectId)
  .subscribe(state => {
    store.dispatch(projectActions.getProject(state.location.params.projectId));
  });

store.dispatch(projectActions.getProjects());

export default class App {

  static childContextTypes = {
    location: React.PropTypes.object.isRequired
  };

  getChildContext () {
    return {location: {transitionTo,reverse}};
  }

  render () {
    return (
      <Provider store={store}>
        {() => <AppContainer/>}
      </Provider>
    );
  }
}
