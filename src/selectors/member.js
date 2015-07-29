import {createSelector} from 'reselect';

export default createSelector(
  [
    state => state.location,
    state => state.project.members
  ],
  (location, members) => members.find(member => member.slug === location.params.memberSlug) || {}
);
