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
    pattern: '/project/:projectId/member/:memberSlug'
  },
  {
    name: 'expense',
    pattern: '/project/:projectId/member/:memberSlug/expense/:expenseSlug'
  }
]
