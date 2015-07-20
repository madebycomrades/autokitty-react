import * as types from '../constants/actionTypes';

const initialState = {};

export default function location (state=initialState, action) {
  switch (action.type) {
  case types.UPDATE_LOCATION:
    return {...action.payload};
  default:
    return state;
  }
}
