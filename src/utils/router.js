import {BehaviorSubject} from 'rx-lite';
import page from 'page';
import pathToRegExp from 'path-to-regexp';

const appRoutes = [];

export const location$ = new BehaviorSubject();

export function addRoutes (routes) {

  routes.forEach(route => {

    const toPath = pathToRegExp.compile(route.pattern);
    appRoutes.push({...route,toPath});

    page(route.pattern,ctx => {
      ctx.route = route;
      location$.onNext({
        params: ctx.params,
        path: ctx.path,
        name: route.name
      });
    });
  });
}

export function startRouter () {
  page({click: false});
}

export function transitionTo (name,params) {
  const path = reverseRoute(name,params);
  page(path);
}

export function reverseRoute (name,params) {
  const route = appRoutes.find(route => route.name === name);
  return route ? route.toPath(params) : '';
}

export function matchPath (path) {
  // TODO
}

export function redirect (path) {
  // TODO
}
