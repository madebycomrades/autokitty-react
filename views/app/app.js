import Flux from '../../public/flux/Flux';
import FluxComponent from 'flummox/component';
import Handlebars from 'handlebars';
import {readFileSync} from 'fs';
import React from 'react';
import {createRouter} from '../../public/router';

const NODE_ENV = process.env.NODE_ENV;

let tpl = Handlebars.compile(readFileSync(`${__dirname}/app.hbs`,{encoding:'utf8'}));
let isDev = NODE_ENV === 'development';

export default function * () {

  let router = createRouter(this.url);

  let flux = new Flux();
  let projectActions = flux.getActions('project');

  let {Root,state} = yield new Promise(resolve => {
    router.run((Root,state) => resolve({Root,state}));
  });

  if ( state.params.projectId ) {
    yield projectActions.fetchProject(state.params.projectId);
  }

  let stateString = flux.serialize();
  stateString = stateString.split('\\').join('\\\\');

  let appString = React.renderToString(
    <FluxComponent flux={flux}>
      <Root/>
    </FluxComponent>
  );

  this.body = tpl({isDev,appString,stateString});
}
