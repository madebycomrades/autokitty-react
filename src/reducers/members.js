import * as types from '../constants/actionTypes';

const initialState = [];

export default function project (state=initialState, action) {
  switch (action.type) {
  case types.GET_PROJECT_FULFILLED:
  case types.CREATE_PROJECT_FULFILLED:
    return [...action.payload.members];
  case types.CREATE_MEMBER_FULFILLED:
    return [{...action.payload}, ...state];
  default:
    return state;
  }
}
