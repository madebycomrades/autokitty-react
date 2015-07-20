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
];
