import * as types from '../constants/actionTypes';

export function addErrorMessage (text) {
  return {
    type: types.ADD_MESSAGE,
    payload: {text, type: 'error'}
  };
}

export function addInfoMessage (text) {
  return {
    type: types.ADD_MESSAGE,
    payload: {text, type: 'info'}
  };
}

export function removeMessage (id) {
  return {
    type: types.REMOVE_MESSAGE,
    payload: {id}
  };
}
