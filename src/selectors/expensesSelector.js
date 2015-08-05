import {createSelector} from 'reselect'
import memberSelector from './memberSelector'

export default createSelector(
  memberSelector,
  member => member.expenses || []
)
