import page from 'page';
import {BehaviorSubject} from 'rx-lite';
import pathToRegExp from 'path-to-regexp';

let routes;

export function locationStream (appRoutes) {

  routes = appRoutes.map(route => {
    const toPath = pathToRegExp.compile(route.pattern);
    return {...route,toPath};
  });

  const location$ = new BehaviorSubject();

  routes.forEach(route => {
    page(route.pattern,ctx => {
      ctx.route = route;
      location$.onNext({
        params: ctx.params,
        path: ctx.path,
        name: route.name
      });
    })
  });

  page({click: false});

  return location$.distinctUntilChanged();
}

export function transitionTo (path) {
  page(path);
}

export function reverse (name,params) {
  const route = routes.find(route => route.name === name);
  return route ? route.toPath(params) : '';
}

export function redirect (path) {
  // TODO
}
