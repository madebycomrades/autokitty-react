import * as types from '../constants/actionTypes';

const initialState = {};

export default function project (state=initialState, action) {
  switch (action.type) {
  case types.RESET_PROJECT:
    return {};
  case types.GET_PROJECT:
    return {...action.payload};
  case types.ADD_PROJECT:
    return {...action.payload};
  default:
    return state;
  }
}
