/**
 * Selects an array of members which are participating in the current expense.
 */

import currentExpense from './currentExpense'
import {createSelector} from 'reselect'

export default createSelector(
  [currentExpense, state => state.project.members],
  (expense, members) => members.filter(member => expense.excluded.indexOf(member.slug) < 0)
)
