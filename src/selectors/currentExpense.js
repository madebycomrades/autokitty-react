/**
 * Selects the current expense based on the browser location.
 */

import {createSelector} from 'reselect'
import currentExpenses from './currentExpenses'

export default createSelector(
  [state => state.location, currentExpenses],
  (location, expenses) => expenses.find(expense => expense.slug === location.params.expenseSlug) || {excluded: []}
)
