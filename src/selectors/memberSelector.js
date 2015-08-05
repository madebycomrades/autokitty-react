import {createSelector} from 'reselect'
import membersSelector from './membersSelector'

export default createSelector(
  [state => state.location, membersSelector],
  (location, members) => members.find(member => member.slug === location.params.memberSlug) || {}
)
