import * as types from '../constants/actionTypes'

const initialState = [{
  id: 0,
  text: 'Welcome, friend',
  type: 'info'
}]

export default function projects (state=initialState, action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [{
        ...action.payload,
        id: (state.length === 0) ? 0 : state[0].id + 1
      }, ...state]
    case types.REMOVE_MESSAGE:
      return state.filter(message => action.payload.id !== message.id)
    default:
      return state
  }
}
