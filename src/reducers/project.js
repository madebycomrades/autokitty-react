import * as types from '../constants/actionTypes';

const initialState = {
  members: []
};

export default function project (state=initialState, action) {
  switch (action.type) {
  case types.RESET_PROJECT:
    return initialState;
  case types.GET_PROJECT_FULFILLED:
  case types.CREATE_PROJECT_FULFILLED:
    return {...action.payload};
  case types.CREATE_MEMBER_FULFILLED:
    return {
      ...state,
      members: [...state.members, {...action.payload}]
    };
  case types.CREATE_EXPENSE_FULFILLED:
    const members = state.members.map(member => {
      if (member.slug !== action.payload.owner) return member;
      return {
        ...member,
        expenses: [...member.expenses, {...action.payload}]
      };
    });
    return {...state, members};
  default:
    return state;
  }
}
