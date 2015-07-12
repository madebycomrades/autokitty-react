export default function httpStatus (next) {

  return action => {

    const {payload} = action;
    const isApiResponse = payload && typeof payload.json === 'function';

    if (!isApiResponse) return next(action);

    const {status} = payload;
    const isError = status < 200 || status >= 300;

    if (isError) {
      const err = new Error(payload.statusText);
      err.res = payload;
      return next({...action,payload:err,error:true});
    } else {
      return next(action);
    }
  }
}
