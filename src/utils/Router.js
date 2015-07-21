import {BehaviorSubject} from 'rx-lite';
import page from 'page';
import pathToRegExp from 'path-to-regexp';

export default class Router {

  constructor (routes) {
    this.routes = routes.map(route => {
      const toPath = pathToRegExp.compile(route.pattern);
      const keys = [];
      const re = pathToRegExp(route.pattern, keys);
      return {...route, toPath, re, keys};
    });
  }

  createLocationObservable () {
    const location$ = new BehaviorSubject();
    this.routes.forEach(route => {
      page(route.pattern, ctx => {
        ctx.route = route;
        location$.onNext({
          params: ctx.params,
          path: ctx.path,
          name: route.name
        });
      });
    });
    return location$.distinctUntilChanged(location => location.name);
  }

  start () {
    page({click: false});
  }

  matchPath (path) {
    let match;
    this.routes.forEach(route => {
      const result = route.re.exec(path);
      if (result) {
        const params = {};
        route.keys.forEach((key, i) => params[key.name] = result[i + 1]);
        match = {...route, params};
      }
    });
    return match;
  }

  transitionTo (name, params) {
    const path = this.reverseRoute(name, params);
    page(path);
  }

  reverseRoute (name, params) {
    const route = this.routes.find(route => route.name === name);
    return route ? route.toPath(params) : '';
  }
}
