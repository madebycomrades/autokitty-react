import Flux from '../../public/flux/Flux';
import FluxComponent from 'flummox/component';
import Handlebars from 'handlebars';
import {readFileSync} from 'fs';
import React from 'react';
import Router from 'react-router';
import routes from '../../public/routes';

const NODE_ENV = process.env.NODE_ENV;

let tpl = Handlebars.compile(readFileSync(`${__dirname}/app.hbs`,{encoding:'utf8'}));
let isDev = NODE_ENV === 'development';

export default function * appView () {

  let location = this.url
  let router = Router.create({routes,location});

  let flux = new Flux();
  let projectActions = flux.getActions('project');

  let {Root,state} = yield new Promise(resolve => {
    router.run((Root,state) => resolve({Root,state}));
  });

  if ( state.params.projectId ) {
    yield projectActions.get(state.params.projectId);
  }

  let appString = React.renderToString(
    <FluxComponent flux={flux}>
      <Root/>
    </FluxComponent>
  );

  this.body = tpl({isDev,appString});
}
