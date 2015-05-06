import Flux from './flux/Flux';
import FluxComponent from 'flummox/component';
import React from 'react';
import Router from 'react-router';
import {createRouter} from './router';
import 'isomorphic-fetch';

import 'normalize.css/normalize.css!';
import './base.css!';

let flux = new Flux();
flux.deserialize(stateString);

let projectActions = flux.getActions('project');
let projectStore = flux.getStore('project');

let router = createRouter(Router.HistoryLocation);

router.run(async (Root,state) => {

  // Only fetch a project if the route has a :projectId param in it
  // which doesn't match the current project in the store - prevents double
  // fetching when the app has just been recreated from a serialised server state
  // TODO: Clear the project in the store when we move off a project route

  if ( state.params.projectId && projectStore.getProject()._id !== state.params.projectId) {
    await projectActions.fetchProject(state.params.projectId);
  }

  React.render(
    <FluxComponent flux={flux}>
      <Root/>
    </FluxComponent>,
    document.getElementById('app')
  );

  console.log(`Rendered ${state.path}`);
});
