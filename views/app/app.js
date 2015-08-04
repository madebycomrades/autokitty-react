import {readFileSync} from 'fs';
import AppContainer from '../../src/containers/app/AppContainer';
import createStore from '../../src/utils/createStore';
import db from '../../db/db';
import Handlebars from 'handlebars';
import React from 'react';
import Router from '../../src/utils/Router';
import routes from '../../src/routes';

const router = new Router(routes);
const tpl = Handlebars.compile(readFileSync(`${__dirname}/app.hbs`, {encoding: 'utf8'}));

export default function * () {

  const {url} = this.request;
  const route = router.matchPath(url);

  if (!route) {
    this.status = 404;
    return;
  }

  const initialState = {
    location: {
      params: route.params,
      path: url,
      name: route.name
    }
  };

  const {projectId} = route.params;

  if (projectId) {
    initialState.project = yield db.get(projectId);
    initialState.members = initialState.project.members;
  }

  const store = createStore(initialState);
  const appString = React.renderToString(<AppContainer store={store} router={router}/>);
  const initialStateString = JSON.stringify(initialState);
  this.body = tpl({appString, initialStateString});
}
