import Router from 'react-router';

let router;

function create (routes,location) {
  router = Router.create({routes,location});
  return router;
}

function get () {
  return router;
}

export {create,get};
