import pathToRegExp from 'path-to-regexp';

export default [
  {
    name: 'home',
    pattern: '/'
  },
  {
    name: 'project',
    pattern: '/project/:projectId'
  },
  {
    name: 'member',
    pattern: '/project/:projectId/member/:memberId'
  },
  {
    name: 'expense',
    pattern: '/project/:projectId/member/:memberId/expense/:expenseId'
  }
].map(route => {
  const keys = [];
  const re = pathToRegExp(route.pattern,keys);
  const toPath = pathToRegExp.compile(route.pattern);
  return {...route,keys,re,toPath};
});
