import page from 'page';
import {BehaviorSubject} from 'rx-lite';

let routes;

export function locationStream (r) {
  routes = r;
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
