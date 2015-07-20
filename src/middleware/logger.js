export default function logger () {

  return next => action => {
    console.groupCollapsed(action.type);
    console.dir(action);
    console.groupEnd();
    return next(action);
  };
}
