import * as types from '../constants/actionTypes';

const initialState = {};

export default function project (state=initialState, action) {
  switch (action.type) {
  case types.RESET_PROJECT:
    return {};
  case types.GET_PROJECT_FULFILLED:
  case types.CREATE_PROJECT_FULFILLED:
    return {...action.payload};
  default:
    return state;
  }
}
