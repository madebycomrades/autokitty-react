export default function json (next) {

  return action => {

    const {payload} = action;
    const isJson = payload && typeof payload.json === 'function';

    if (!isJson) return next(action);

    return payload.json()
      .then(res => next({...action, payload:res}))
      .catch(err => next({...action, payload:err, error:true}));
  }
}
