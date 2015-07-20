export default function json () {

  return next => action => {

    const {payload} = action;
    const isResponse = payload && payload.constructor.name === 'Response';
    const isJson = isResponse && payload.headers.get('Content-Type').startsWith('application/json');

    if (!isJson) return next(action);

    return payload.json()
      .then(res => next({...action, payload: res}))
      .catch(err => next({...action, payload: err, error: true}));
  };
}
