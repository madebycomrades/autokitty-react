export default function (store$) {
  return store$
    .distinctUntilChanged(state => state.project._id)
    .filter(state => typeof state.project._id !== 'undefined')
    .filter(state => state.location.name === 'home')
    .map(state => state.project._id)
}
