export default function (state$) {
  return state$
    .filter(state => state.location.path.startsWith('/project/'))
    .filter(state => state.project._id !== state.location.params.projectId);
}
