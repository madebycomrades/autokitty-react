export default function logger (next) {
  return action => {
    console.log(action.type);
    return next(action);
  }
}
