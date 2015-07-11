import * as types from '../constants/actionTypes';
import shortid from 'shortid';
import slug from 'to-slug-case';

const initialState = [];

export default function project (state=initialState,action) {
  switch (action.type) {
  case types.SYNC_PROJECTS:
    return [
      ...action.projects
    ];
  case types.ADD_PROJECT:
    const {title} = action;
    return [
      {
        _id: `${slug(title)}-${shortid.generate()}`,
        title
      },
      ...state
    ];
  case types.DELETE_PROJECT:
    return state.filter(project => project._id !== action._id);
  default:
    return state;
  }
}
