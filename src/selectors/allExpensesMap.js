/**
 * Exposes all the expenses in a project as a Map with
 * the shape [expenseSlug, expense].
 */

import {createSelector} from 'reselect'
import allExpenses from './allExpenses'

export default createSelector(
  allExpenses,
  expenses => new Map(expenses.map(expense => [expense.slug, expense]))
)
