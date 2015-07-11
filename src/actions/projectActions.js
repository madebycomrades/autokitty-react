import * as types from '../constants/actionTypes';

export function syncProjects () {
  return {
    type: types.SYNC_PROJECTS,
    projects: [
      {title: 'He he!',
      _id: '1'},
      {title: 'Ho ho!',
      _id: '2'},
    ]
  };
}

export function addProject (title) {
  return {
    type: types.ADD_PROJECT,
    title
  };
}

export function deleteProject (_id) {
  return {
    type: types.DELETE_PROJECT,
    _id
  };
}
