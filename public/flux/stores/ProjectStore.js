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
    // newState = newState instanceof ProjectRecord ? newState.toJS() : newState;
    // oldState = oldState ? oldState.toJS() : {};
    // return new ProjectRecord(Object.assign({},oldState,newState));
    return newState instanceof ProjectRecord ? newState : new ProjectRecord(newState);
  }

  state = new ProjectRecord({});

  constructor ({projectActions}) {
    super();
    this.register(projectActions.fetchProject,this.handleFetchProject);
    this.register(projectActions.deleteMember,this.handleDeleteMember);
  }

  handleFetchProject (project) {
    this.setState(project);
  }

  handleDeleteMember (memberSlug) {
    let project = this.state.toJS();
    project.members = project.members.filter(member => member.slug !== memberSlug);
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
