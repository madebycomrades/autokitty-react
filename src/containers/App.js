import React from 'react';
import AutoKittyApp from './AutoKittyApp';
import {createStore} from 'redux';
import {Provider} from 'redux/react';
import {IS_DEV} from '../constants/env';
import * as reducers from '../reducers';
import * as projectActions from '../actions/projectActions';
import * as locationActions from '../actions/locationActions';
import * as middleware from '../middleware';
import {locationStream,transitionTo,reverse} from '../utils/location';
import stateStream from '../utils/stateStream';
import routes from '../routes';

const middlewareStack = [
  middleware.promise,
  middleware.httpError,
  middleware.json
];

if (IS_DEV) middlewareStack.push(middleware.logger);

const store = createStore(reducers,{},middlewareStack);
const state$ = stateStream(store);
const location$ = locationStream(routes);

location$.subscribe(location => {
  store.dispatch(locationActions.updateLocation(location));
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
        {() => <AutoKittyApp/> }
      </Provider>
    );
  }
}
