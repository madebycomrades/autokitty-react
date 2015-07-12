import * as types from '../constants/actionTypes';
import shortid from 'shortid';
import slug from 'to-slug-case';

const initialState = [];

export default function project (state=initialState,action) {
  switch (action.type) {
  case types.GET_PROJECTS:
    return [
      ...action.payload
    ];
  case types.ADD_PROJECT:
    const {title} = action.payload;
    return [
      {
        _id: `${slug(title)}-${shortid.generate()}`,
        title
      },
      ...state
    ];
  case types.DELETE_PROJECT:
    const {_id} = action.payload;
    return state.filter(project => project._id !== action._id);
  default:
    return state;
  }
}
