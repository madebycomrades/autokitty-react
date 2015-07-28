import * as types from '../constants/actionTypes';

const initialState = [];

export default function projects (state=initialState, action) {
  switch (action.type) {
  case types.GET_PROJECTS_FULFILLED:
    return [...action.payload];
  default:
    return state;
  }
}
