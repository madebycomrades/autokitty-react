import React from 'react';
import AutoKittyApp from './AutoKittyApp';
import {createStore} from 'redux';
import {Provider} from 'redux/react';
import {IS_DEV} from '../constants/env';
import * as reducers from '../reducers';
import * as projectActions from '../actions/projectActions';
import * as middleware from '../middleware';
import location,{transitionTo} from '../utils/location';
import routes from '../routes';

const middlewareStack = [
  middleware.promise,
  middleware.httpError,
  middleware.json
];

if (IS_DEV) middlewareStack.push(middleware.logger);

const store = createStore(reducers,{},middlewareStack);

// store.dispatch(projectActions.getProjects());

const location$ = location(routes);

location$.subscribe(location => {
  console.log(location);
  // update store
});

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <AutoKittyApp/> }
      </Provider>
    );
  }
}

// Routes ... #177
// Make a route reducer that saves the current route state. Then, transition from
// inside a store subscriber whenever the route state changes.
