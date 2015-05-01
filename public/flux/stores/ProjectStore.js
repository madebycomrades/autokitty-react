import {Store} from 'flummox';

export default class ProjectStore extends Store {

  constructor({projectActions}) {
    super();
    this.register(projectActions.get,this.handleGet);
    this.state = {};
  }

  handleGet (project) {
    this.setState(project);
  }

  get () {
    return this.state;
  }
}
