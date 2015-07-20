import * as locationActions from './actions/locationActions';
import * as observables from './observables';
import * as projectActions from './actions/projectActions';
import AppContainer from './containers/app/AppContainer';
import createStore from './utils/createStore';
import observableFromStore from './utils/observableFromStore';
import React from 'react';
import Router from './utils/Router';
import routes from './routes';

const store = createStore(window.INITIAL_STATE);
const store$ = observableFromStore(store);

const router = new Router(routes);
router.start();

observables.didNavigateHome(store$)
  .subscribe(() => {
    store.dispatch(projectActions.resetProject());
    store.dispatch(projectActions.getProjects());
  });

observables.didNavigateUnCachedProjectRoute(store$)
  .subscribe(state => {
    store.dispatch(projectActions.getProject(state.location.params.projectId));
  });

observables.didCreateProject(store$)
  .subscribe(projectId => router.transitionTo('project', {projectId}));

router.location$
  .distinctUntilChanged(location => location.name)
  .subscribe(location => store.dispatch(locationActions.updateLocation(location)));

React.render(
  <AppContainer store={store} router={router}/>,
  document.getElementById('app')
);
