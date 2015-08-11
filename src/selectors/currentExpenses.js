/**
 * Selects an array of expenses for the current member.
 */

import {createSelector} from 'reselect'
import currentMember from './currentMember'

export default createSelector(
  currentMember,
  member => member.expenses || []
)
