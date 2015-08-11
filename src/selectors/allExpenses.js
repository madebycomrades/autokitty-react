/**
 * Selects all expenses in a project.
 */

import {createSelector} from 'reselect'

export default createSelector(
  state => state.project.members,
  members => members
    .reduce((expenses, member) => expenses.concat(member.expenses), [])
)
