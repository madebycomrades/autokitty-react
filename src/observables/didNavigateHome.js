export default function (store$) {
  return store$
    .distinctUntilChanged(state => state.location.name)
    .filter(state => state.location.name === 'home')
}
