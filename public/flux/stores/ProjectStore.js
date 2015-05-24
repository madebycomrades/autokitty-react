import {Store} from 'flummox';
import ProjectRecord from '../../records/ProjectRecord';

export default class ProjectStore extends Store {

  static serialize (state) {
    return JSON.stringify(state.toJS());
  }

  static deserialize (stateString) {
    return JSON.parse(stateString);
  }

  static assignState (oldState,newState) {
    newState = newState instanceof ProjectRecord ? newState.toJS() : newState;
    oldState = oldState ? oldState.toJS() : {};
    return new ProjectRecord(Object.assign({},oldState,newState));
  }

  state = new ProjectRecord({});

  constructor ({projectActions}) {
    super();
    this.register(projectActions.fetchProject,this.handleFetchProject);
  }

  handleFetchProject (project) {
    this.setState(project);
  }

  getProject () {
    return this.state;
  }

  clearProject () {
    this.replaceState({});
  }

  getStateAsObject () {
    return this.state.toJS();
  }
}
