import {addMessage} from '../actions/messageActions';

export default function promise ({dispatch}) {

  return next => action => {

    const {payload} = action;
    const isPromise = payload && typeof payload.then === 'function';

    if (!isPromise) return next(action);

    const {types} = action;
    const [PENDING, FULFILLED, REJECTED] = types;

    next({type: PENDING});

    return payload
      .then(response => {
        const {status} = response;
        if (status < 200 || status >= 300) {
          const message = `HTTP ${status}`;
          dispatch(addMessage(message, 'error'));
          throw new Error(message);
        } else {
          return response;
        }
      })
      .then(response => response.json ? response.json() : response)
      .then(data => next({payload: data, type: FULFILLED}))
      .catch(error => next({payload: error, error: true, type: REJECTED}));
  };
}
