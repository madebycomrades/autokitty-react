import {Actions} from 'flummox';
import {apiPath} from '../../utils';

let projectResourceUri = `${apiPath()}/project`;

export default class ProjectActions extends Actions {

  async fetchProject (id) {
    var response = await fetch(`${projectResourceUri}/${id}`);
    if (response.status === 200) {
      return await response.json();
    } else {
      // TODO: Need to transitionTo to an error page here? Implementation will
      // need to work on server and client
      return await Promise.reject(new Error(`${response.status} fetching project ${id}`));
    }
  }

  async newProject (project) {
    // 1. Create the project via the API
    // 2. Populate into store
  }
}
