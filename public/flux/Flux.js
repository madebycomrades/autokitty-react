import {Flummox} from 'flummox';
import ProjectActions from './actions/ProjectActions';
import ProjectStore from './stores/ProjectStore';

export default class Flux extends Flummox {
  constructor () {
    super();
    const projectActions = this.createActions('project',ProjectActions);
    this.createStore('project',ProjectStore,{projectActions});
  }
}
