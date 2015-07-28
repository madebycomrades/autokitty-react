export default function logger () {

  return next => action => {
    if (process.env.NODE_ENV === 'development') {
      console.groupCollapsed(action.type);
      console.dir(action);
      console.groupEnd();
    }
    return next(action);
  };
}
