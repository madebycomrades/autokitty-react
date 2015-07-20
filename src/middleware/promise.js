export default function promise () {

  return next => action => {

    const {payload} = action;
    const isPromise = payload && typeof payload.then === 'function';

    if (!isPromise) return next(action);

    const {types} = action;
    const [PENDING, FULFILLED, REJECTED] = types;

    next({type: PENDING});

    return payload
      .then(payload => next({payload, type: FULFILLED}))
      .catch(payload => next({payload, error: true, type: REJECTED}));
  };
}
