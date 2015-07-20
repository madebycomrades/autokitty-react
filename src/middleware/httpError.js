export default function httpStatus () {

  return next => action => {

    const {payload} = action;
    const isResponse = payload && payload.constructor.name === 'Response';

    if (!isResponse) return next(action);

    const {status} = payload;
    const isError = status < 200 || status >= 300;

    if (isError) {
      const error = new Error(payload.statusText);
      error.response = payload;
      return next({...action, payload: error, error: true});
    } else {
      return next(action);
    }
  };
}
