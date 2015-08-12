/**
 * Selects all members in a project and exposes them as a map with
 * the shape [memberSlug, member].
 */

import {createSelector} from 'reselect'

export default createSelector(
  state => state.project.members,
  members => new Map(members.map(member => [member.slug, member]))
)
