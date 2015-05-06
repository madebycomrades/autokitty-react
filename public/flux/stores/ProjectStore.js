import {Store} from 'flummox';

export default class ProjectStore extends Store {

  static serialize (state) {
    return JSON.stringify(state);
  }

  static deserialize (stateString) {
    return JSON.parse(stateString);
  }

  state = {};

  constructor({projectActions}) {
    super();
    this.register(projectActions.fetchProject,this.handleFetchProject);
  }

  handleFetchProject (project) {
    this.setState(project);
  }

  getProject () {
    return this.state;
  }
}
