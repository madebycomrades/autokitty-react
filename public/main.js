import Flux from './flux/Flux';
import FluxComponent from 'flummox/component';
import React from 'react';
import Router from 'react-router';
import {create as createRouter} from './routing/router';
import routes from './routing/routes';

let router = createRouter(routes,Router.HistoryLocation);
let flux = new Flux();
let actions = flux.getActions('project');
let store = flux.getStore('project');

flux.deserialize(stateString);

router.run(async (Root,state) => {

  let projectId = state.params.projectId;

  if (projectId && store.getProject().get('_id') !== projectId) await actions.fetchProject(projectId);

  if (!projectId) store.clearProject();

  React.render(
    <FluxComponent flux={flux}>
      <Root/>
    </FluxComponent>,
    document.getElementById('app')
  );

  console.log(`Rendered ${state.path}`);
});
