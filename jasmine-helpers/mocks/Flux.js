export default class FluxMock {

  projectActions = {
    newProject () {
      return Promise.resolve({_id: 'test'});
    }
  }

  getActions () {
    return this.projectActions;
  }
}
