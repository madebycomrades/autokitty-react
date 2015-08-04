export default function thunk ({dispatch, getState}) {
  return next => action => {
    const {payload} = action;
    return typeof payload === 'function' ?
      payload(dispatch, getState) :
      next(action);
  };
}
