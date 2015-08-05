import {PROJECT_RESOURCE} from '../constants/paths'
import * as types from '../constants/actionTypes'
import fetch from 'isomorphic-fetch'

export function getProject (projectId) {
  return {
    types: [
      types.GET_PROJECT_PENDING,
      types.GET_PROJECT_FULFILLED,
      types.GET_PROJECT_REJECTED
    ],
    payload: fetch(`${PROJECT_RESOURCE}/${projectId}`)
  }
}

export function resetProject () {
  return {
    type: types.RESET_PROJECT,
    payload: {}
  }
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
  }
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
  }
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
  }
}

export function excludeMemberFromExpense (projectId, memberSlug, expenseSlug, excludedMemberSlug) {
  return {
    payload (dispatch, getState) {

      const members = getState().project.members
      const member = members.find(member => member.slug === memberSlug)
      const expense = member.expenses.find(expense => expense.slug === expenseSlug)
      const excluded = [...new Set([...expense.excluded, excludedMemberSlug])]

      dispatch({
        types: [
          types.EXPENSE_PATCH_PENDING,
          types.EXPENSE_PATCH_FULFILLED,
          types.EXPENSE_PATCH_REJECTED
        ],
        payload: fetch(`${PROJECT_RESOURCE}/${projectId}/member/${memberSlug}/expense/${expenseSlug}`, {
          method: 'PATCH',
          body: JSON.stringify({excluded})
        })
      })
    }
  }
}

export function includeMemberInExpense (projectId, memberSlug, expenseSlug, includedMemberSlug) {
  return {
    payload (dispatch, getState) {

      const members = getState().project.members
      const member = members.find(member => member.slug === memberSlug)
      const expense = member.expenses.find(expense => expense.slug === expenseSlug)

      const excludedSet = new Set([...expense.excluded])
      excludedSet.delete(includedMemberSlug)

      const excluded = [...excludedSet]

      dispatch({
        types: [
          types.EXPENSE_PATCH_PENDING,
          types.EXPENSE_PATCH_FULFILLED,
          types.EXPENSE_PATCH_REJECTED
        ],
        payload: fetch(`${PROJECT_RESOURCE}/${projectId}/member/${memberSlug}/expense/${expenseSlug}`, {
          method: 'PATCH',
          body: JSON.stringify({excluded})
        })
      })
    }
  }
}

export function getProjects () {
  return {
    types: [
      types.GET_PROJECTS_PENDING,
      types.GET_PROJECTS_FULFILLED,
      types.GET_PROJECTS_REJECTED
    ],
    payload: fetch(PROJECT_RESOURCE)
  }
}
