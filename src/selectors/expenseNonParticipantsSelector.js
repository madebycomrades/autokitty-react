import {createSelector} from 'reselect'
import expenseSelector from './expenseSelector'
import membersMapSelector from './membersMapSelector'

export default createSelector(
  [expenseSelector, membersMapSelector],
  (expense, membersMap) => expense.excluded.map(slug => membersMap.get(slug))
)
