import * as locationActions from '../actions/locationActions';
import * as projectActions from '../actions/projectActions';
import {addRoutes,location$,reverseRoute,startRouter,transitionTo} from '../utils/router';
import {Provider} from 'react-redux';
import AppContainer from './app/AppContainer';
import createStore from '../createStore';
import React,{PropTypes} from 'react';
import routes from '../routes';
import storeStream from '../utils/storeStream';
import didNavigateHome from '../observables/didNavigateHome';
import didNavigateNewProjectRoute from '../observables/didNavigateNewProjectRoute';
import didCreateProject from '../observables/didCreateProject';

const store = createStore();
const state$ = storeStream(store);

addRoutes(routes);
startRouter();

location$
  .subscribe(location => store.dispatch(locationActions.updateLocation(location)));

didNavigateHome(location$)
  .subscribe(location => {
    store.dispatch(projectActions.resetProject());
  });

didNavigateNewProjectRoute(state$)
  .subscribe(state => {
    store.dispatch(projectActions.getProject(state.location.params.projectId));
  });

didCreateProject(state$).subscribe(projectId => transitionTo('project',{projectId}));

export default class ClientApp {

  static childContextTypes = {
    router: PropTypes.shape({
      transitionTo: PropTypes.func.isRequired,
      reverseRoute: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount () {
    store.dispatch(projectActions.getProjects());
  }

  getChildContext () {
    return {router: {transitionTo,reverseRoute}};
  }

  render () {
    return (
      <Provider store={store}>
        {() => <AppContainer/>}
      </Provider>
    );
  }
}
