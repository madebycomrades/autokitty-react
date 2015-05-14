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

let actions = flux.getActions('project');
let store = flux.getStore('project');

let router = createRouter(Router.HistoryLocation);

/*eslint-disable */
router.run(async (Root,state) => {
/*eslint-enable */

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
