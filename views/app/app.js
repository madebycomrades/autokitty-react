import {PROJECT_RESOURCE} from '../../src/constants/paths';
import {readFileSync} from 'fs';
import AppContainer from '../../src/containers/app/AppContainer';
import createStore from '../../src/utils/createStore';
import fetch from 'isomorphic-fetch';
import Handlebars from 'handlebars';
import pathToRegExp from 'path-to-regexp';
import React from 'react';
import Router from '../../src/utils/Router';
import routes from '../../src/routes';

const router = new Router(routes);
const tpl = Handlebars.compile(readFileSync(`${__dirname}/app.hbs`,{encoding: 'utf8'}));

export default function * () {
  const {url} = this.request;
  const route = router.matchPath(url);

  if (!route) return this.status = 404;

  const initialState = {
    location: {
      params: route.params,
      path: url,
      name: route.name
    }
  }

  const projectId = route.params.projectId;

  if (projectId) {
    const result = yield fetch(`${PROJECT_RESOURCE}/${projectId}`);
    initialState.project = yield result.json();
  }

  const store = createStore(initialState);
  const appString = React.renderToString(<AppContainer store={store} router={router}/>)
  const initialStateString = JSON.stringify(initialState);
  this.body = tpl({appString, initialStateString});
}
  // const projectId = compiledRoutes
  //   .map(route => {
  //     const match = route.re.exec(url);
  //     if (!match) return null;
  //     const index = route.keys
  //       .filter(key => key.name === 'projectId')
  //       .map((key,i) => i)[0];
  //     return match[index+1];
  //   })
  //   .find(projectId => projectId);

  // does route match any?
  // get projectId, null or defined
  //
  // if (url === '/') {
  //   this.body = tpl();
  // } else if (url.startsWith('/project/')) {
  //
  // } else {
  //   this.status = 404;
  // }
// }
