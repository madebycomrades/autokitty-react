import {PROJECT_RESOURCE} from '../constants/paths';
import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function getProject (projectId) {
  return {
    types: [
      types.GET_PROJECT_PENDING,
      types.GET_PROJECT_FULFILLED,
      types.GET_PROJECT_REJECTED
    ],
    payload: fetch(`${PROJECT_RESOURCE}/${projectId}`)
  };
}

export function resetProject () {
  return {
    type: types.RESET_PROJECT,
    payload: {}
  };
}

export function addProject (title) {
  return {
    types: [
      types.ADD_PROJECT_PENDING,
      types.ADD_PROJECT_FULFILLED,
      types.ADD_PROJECT_REJECTED
    ],
    payload: fetch(PROJECT_RESOURCE, {
      method: 'POST',
      body: JSON.stringify({title})
    })
  };
}

export function getProjects () {
  return {
    types: [
      types.GET_PROJECTS_PENDING,
      types.GET_PROJECTS_FULFILLED,
      types.GET_PROJECTS_REJECTED
    ],
    payload: fetch(PROJECT_RESOURCE)
  };
}
