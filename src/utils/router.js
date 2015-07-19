import {BehaviorSubject} from 'rx-lite';
import page from 'page';
import pathToRegExp from 'path-to-regexp';

export default class Router {

  constructor (routes) {
    this.location$ = new BehaviorSubject();
    this.routes = routes.map(route => {

      page(route.pattern, ctx => {
        ctx.route = route;
        this.location$.onNext({
          params: ctx.params,
          path: ctx.path,
          name: route.name
        });
      });

      const toPath = pathToRegExp.compile(route.pattern);
      const keys = [];
      const re = pathToRegExp(route.pattern, keys);

      return {...route, toPath, re, keys};
    });
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
        route.keys.forEach((key,i) => params[key.name] = result[i+1]);
        match = {...route, params};
      }
    });
    return match;
  }

  isValidPath (path) {
    return this.getMatches(path).length > 0;
  }

  // getParam (path, key) {
  //   if (!this.isValidPath(path)) return;
  //   const match = this.getMatches(path)[0];
  //   const index = match.route.keys
  //     .filter(key => key.name === key)
  //     .map((key,i) => i)[0];
  //   return match.result[index+1];
  // }

  transitionTo (name, params) {
    const path = this.reverseRoute(name, params);
    page(path);
  }

  reverseRoute (name, params) {
    const route = this.routes.find(route => route.name === name);
    return route ? route.toPath(params) : '';
  }
}
