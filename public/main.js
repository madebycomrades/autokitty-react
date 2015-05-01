import Flux from './flux/Flux';
import FluxComponent from 'flummox/component';
import React from 'react';
import Router from 'react-router';
import routes from './routes';

let flux = new Flux();
let projectActions = flux.getActions('project');

Router.run(routes,Router.HistoryLocation,async (Root,state) => {

  if ( state.params.projectId ) {
    await projectActions.get(state.params.projectId);
  }

  console.log(`Rendered ${state.path}`);

  React.render(
    <FluxComponent flux={flux}>
      <Root/>
    </FluxComponent>,
    document.body
  );
});
