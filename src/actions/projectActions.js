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

export function createProject (title) {
  return {
    types: [
      types.CREATE_PROJECT_PENDING,
      types.CREATE_PROJECT_FULFILLED,
      types.CREATE_PROJECT_REJECTED
    ],
    payload: fetch(PROJECT_RESOURCE, {
      method: 'POST',
      body: JSON.stringify({title})
    })
  };
}

export function createMember (projectId, name) {
  return {
    types: [
      types.CREATE_MEMBER_PENDING,
      types.CREATE_MEMBER_FULFILLED,
      types.CREATE_MEMBER_REJECTED
    ],
    payload: fetch(`${PROJECT_RESOURCE}/${projectId}/member`, {
      method: 'POST',
      body: JSON.stringify({name})
    })
  };
}

export function createExpense (projectId, memberSlug, name) {
  return {
    types: [
      types.CREATE_EXPENSE_PENDING,
      types.CREATE_EXPENSE_FULFILLED,
      types.CREATE_EXPENSE_REJECTED
    ],
    payload: fetch(`${PROJECT_RESOURCE}/${projectId}/member/${memberSlug}/expense`, {
      method: 'POST',
      body: JSON.stringify({name})
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
