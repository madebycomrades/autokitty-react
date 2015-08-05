export default function (store$) {
  return store$
    .distinctUntilChanged()
    .filter(state => state.location.path.startsWith('/project/'))
    .filter(state => state.project._id !== state.location.params.projectId)
}
