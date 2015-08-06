import {createSelector} from 'reselect'
import expenseSelector from './expenseSelector'
import membersSelector from './membersSelector'

export default createSelector(
  [expenseSelector, membersSelector],
  (expense, members) => members.filter(member => expense.excluded.indexOf(member.slug) < 0)
)
