import * as types from '../constants/actionTypes';

export function updateLocation (location) {
  return {
    type: types.UPDATE_LOCATION,
    payload: location
  };
}
