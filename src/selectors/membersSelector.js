import {createSelector} from 'reselect';

export default createSelector(
  state => state.project,
  project => project.members || []
);
