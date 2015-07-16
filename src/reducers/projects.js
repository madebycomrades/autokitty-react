import * as types from '../constants/actionTypes';

const initialState = [];

export default function projects (state=initialState,action) {
  switch (action.type) {
  case types.GET_PROJECTS:
    return [...action.payload];
  case types.ADD_PROJECT:
    return [{...action.payload}, ...state];
  default:
    return state;
  }
}
