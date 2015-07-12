import * as types from '../constants/actionTypes';
import {PROJECT_RESOURCE} from '../constants/paths';
import fetch from 'isomorphic-fetch';

export function getProjects () {
  return {
    type: types.GET_PROJECTS,
    payload: fetch(PROJECT_RESOURCE)
  };
}

export function addProject (title) {
  return {
    type: types.ADD_PROJECT,
    payload: {title}
  };
}

export function deleteProject (_id) {
  return {
    type: types.DELETE_PROJECT,
    payload: {_id}
  };
}
