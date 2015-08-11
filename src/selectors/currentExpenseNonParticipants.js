/**
 * Selects an array of members which are not participating in the current
 * expense.
 */

import currentExpense from './currentExpense'
import membersMap from './membersMap'
import {createSelector} from 'reselect'

export default createSelector(
  [currentExpense, membersMap],
  (expense, members) => expense.excluded.map(slug => members.get(slug))
)
