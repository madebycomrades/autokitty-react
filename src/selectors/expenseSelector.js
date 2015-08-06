import {createSelector} from 'reselect'
import expensesSelector from './expensesSelector'

export default createSelector(
  [state => state.location, expensesSelector],
  (location, expenses) => expenses.find(expense => expense.slug === location.params.expenseSlug) || {excluded: []}
)
