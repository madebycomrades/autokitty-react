/**
 * Computes the current balance for all members and exposes the data in a
 * Map with the shape [memberSlug, {spent,owes,balance}].
 */

import {createSelector} from 'reselect'
import sharesMap from './sharesMap'
import allExpenses from './allExpenses'

export default createSelector(
  [state => state.project.members, sharesMap, allExpenses],
  (members, sharesMap, expenses) => {
    return new Map(
      members.map(member => {
        const spent = member.expenses
          .reduce((total, {amount}) => total + parseFloat(amount), 0)
        const owes = expenses
          .reduce((total, expense) => {
            return expense.excluded.indexOf(member.slug) >= 0 ? total : total + sharesMap.get(expense.slug)
          }, 0)
        const balance = spent - owes
        const inCredit = spent > owes
        return [member.slug, {spent, owes, balance, inCredit}]
      })
    )
  }
)
