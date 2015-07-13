import pathToRegExp from 'path-to-regexp';

export default function matchPath (path,routes) {

  return routes
    .filter(route => route.re.test(path))
    .map(route => {
      const result = route.re.exec(path);
      const params = {};
      route.keys.forEach((key,i) => params[key.name] = result[i+1]);
      return {...route,path,params};
    });
};
