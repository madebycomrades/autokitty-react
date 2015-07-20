export default function promise () {

  return next => action => {

    const {payload} = action;
    const isPromise = payload && typeof payload.then === 'function';

    if (!isPromise) return next(action);

    return payload
      .then(res => next({...action, payload: res}))
      .catch(err => next({...action, payload: err, error: true}));
  };
}
