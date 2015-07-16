import {addRoutes,location$,reverseRoute,startRouter,transitionTo} from './utils/router';
import * as locationActions from './actions/locationActions';
import * as observables from './observables';
import * as projectActions from './actions/projectActions';
import AppContainer from './containers/app/AppContainer';
import createStore from './utils/createStore';
import observableFromStore from './utils/observableFromStore';
import React from 'react';
import routes from './routes';

const store = createStore();
const store$ = observableFromStore(store);

addRoutes(routes);
startRouter();

location$
  .subscribe(location => store.dispatch(locationActions.updateLocation(location)));

observables.didNavigateHome(location$)
  .subscribe(location => {
    store.dispatch(projectActions.resetProject());
    store.dispatch(projectActions.getProjects());
  });

observables.didNavigateUnCachedProjectRoute(store$)
  .subscribe(state => {
    store.dispatch(projectActions.getProject(state.location.params.projectId));
  });

observables.didCreateProject(store$)
  .subscribe(projectId => transitionTo('project',{projectId}));

React.render(
  <AppContainer store={store} router={{transitionTo,reverseRoute}}/>,
  document.getElementById('app')
);
