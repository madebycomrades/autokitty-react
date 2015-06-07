export default class FluxMock {

  projectActions = {
    newProject () {}
  }

  getActions () {
    return this.projectActions;
  }
}
