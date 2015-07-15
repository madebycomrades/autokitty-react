export default function logger ({dispatch, getState}) {

  return next => action => {
    console.groupCollapsed(action.type);
    console.dir(action);
    console.groupEnd();
    return next(action);
  }
}
