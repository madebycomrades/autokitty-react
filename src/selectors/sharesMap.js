/**
 * Computes the cost per participant for all expenses and exposes the data in a
 * Map with the shape [expenseSlug, share].
 */

import {createSelector} from 'reselect'
import allExpenses from './allExpenses'
import membersMap from './membersMap'

export default createSelector(
  [allExpenses, membersMap],
  (allExpenses, membersMap) => new Map(
    allExpenses.map(expense => {
      // Filter the excluded array to make sure we only count excluded members
      // that still exist in the project
      const numExcluded = expense.excluded.filter(slug => membersMap.has(slug)).length
      const numParticipating = membersMap.size - numExcluded
      return [expense.slug, expense.amount / numParticipating]
    })
  )
)
