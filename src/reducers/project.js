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
    return {
      ...state,
      members: state.members.map(member =>
        member.slug === action.payload.owner ?
          {...member, expenses: [...member.expenses, {...action.payload}]}
          : member
      )
    };
  case types.EXPENSE_PATCH_FULFILLED:
    return {
      ...state,
      members: state.members.map(member =>
        member.slug === action.payload.owner ?
          {
            ...member,
            expenses: member.expenses.map(expense => {
              if (expense.slug === action.payload.slug) {
                return action.payload;
              } else {
                return expense;
              }
            })
          }
          : member
      )
    };
  default:
    return state;
  }
}
