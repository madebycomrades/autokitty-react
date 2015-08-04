import db from '../../../db/db';
import {json} from 'co-body';
import route from 'koa-route';

export default route.patch('/api/project/:projectId/member/:memberSlug/expense/:expenseSlug', function * (projectId, memberSlug, expenseSlug) {
  const patch = yield json(this);
  let patchedExpense;
  yield db.upsert(projectId, project => {
    const member = project.members.find(member => member.slug === memberSlug);
    member.expenses = member.expenses
      .map(expense => {
        if (expense.slug === expenseSlug) {
          patchedExpense = Object.assign(expense, patch);
          return patchedExpense;
        } else {
          return expense;
        }
      });
    return project;
  });
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(patchedExpense);
});
