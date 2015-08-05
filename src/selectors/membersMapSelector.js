import {createSelector} from 'reselect'
import membersSelector from './membersSelector'

export default createSelector(
  membersSelector,
  (members) => new Map(members.map(member => [member.slug, member]))
)
