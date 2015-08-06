import {addErrorMessage} from '../actions/messageActions'

export default function fetch ({dispatch}) {

  return next => action => {

    const {payload} = action
    const isPromise = payload && typeof payload.then === 'function'

    if (!isPromise) return next(action)

    const {types} = action
    const [PENDING, FULFILLED, REJECTED] = types

    dispatch({type: PENDING})

    return payload
      .then(response => {
        const {status} = response
        if (status < 200 || status >= 300) {
          const message = `Error HTTP${status}`
          dispatch(addErrorMessage(message))
          throw new Error(message)
        } else {
          return response
        }
      })
      .then(response => response.json ? response.json() : response)
      .then(data => dispatch({payload: data, type: FULFILLED}))
      .catch(error => dispatch({payload: error, error: true, type: REJECTED}))
  }
}
