import {PROJECT_RESOURCE} from '../constants/paths';
import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function getProject (projectId) {
  return {
    type: types.GET_PROJECT,
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
    type: types.ADD_PROJECT,
    payload: fetch(PROJECT_RESOURCE, {
      method: 'POST',
      body: JSON.stringify({title})
    })
  };
}

export function getProjects () {
  return {
    type: types.GET_PROJECTS,
    payload: fetch(PROJECT_RESOURCE)
  };
}

export function deleteProject (projectId) {
  return {
    type: types.DELETE_PROJECT,
    payload: fetch(`${PROJECT_RESOURCE}/${projectId}`, {
      method: 'DELETE'
    })
  };
}
