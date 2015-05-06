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
    var ops = {
      method: 'post',
      headers: {'Accept':'application/json','Content-Type': 'application/json'},
      body: JSON.stringify(project)
    };
    var response = await fetch(`${projectResourceUri}`,ops);
    if (response.status === 201) {
      return await response.json();
    } else {
      return await Promise.reject(new Error(`${response.status} creating project ${project.title}`));
    }
  }
}
