import * as types from '../constants/actionTypes';

export function addMessage (text, type) {
  return {
    type: types.ADD_MESSAGE,
    payload: {text, type}
  };
}

export function removeMessage (id) {
  return {
    type: types.REMOVE_MESSAGE,
    payload: {id}
  };
}
