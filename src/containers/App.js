import React from 'react';
import AutoKittyApp from './AutoKittyApp';
import {createStore,composeMiddleware} from 'redux';
import {Provider} from 'redux/react';
import * as reducers from '../reducers';
import * as projectActions from '../actions/projectActions';
import * as middlewares from '../middlewares';

const store = createStore(reducers,{},[
  middlewares.promise,
  middlewares.httpError,
  middlewares.json,
  middlewares.logger
]);

store.dispatch(projectActions.getProjects());

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
