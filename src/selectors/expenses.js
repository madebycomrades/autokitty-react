import {createSelector} from 'reselect';
import memberSelector from './member';

export default createSelector(
  memberSelector,
  member => member.expenses
);
