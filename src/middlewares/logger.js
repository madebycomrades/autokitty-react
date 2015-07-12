export default function logger (next) {
  return action => {
    console.groupCollapsed(action.type);
    console.dir(action);
    console.groupEnd();
    return next(action);
  }
}
