import page from 'page';
import Rx from 'rx-lite';

const location$ = new Rx.BehaviorSubject();

export default function (routes) {
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
  return location$;
}

export function transitionTo (path) {
  page(path);
}

export function redirect (path) {
  // Todo
}
