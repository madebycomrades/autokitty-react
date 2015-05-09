import {Actions} from 'flummox';
import {apiPath} from '../../utils';

let projectResourceUri = `${apiPath()}/project`;

export default class ProjectActions extends Actions {

  async fetchProject (id) {
    console.log('Fetch',id);

    var response = await fetch(`${projectResourceUri}/${id}`);

    if (response.status === 200) {
      return await response.json();
    } else {
      return Promise.reject(new Error(`${response.status} error fetching project ${id}`));
    }
  }

  async newProject (project) {
    console.log('New',project.title);

    var response = await fetch(projectResourceUri,{
      method: 'post',
      body: JSON.stringify(project)
    });

    if (response.status === 201) {
      return await response.json();
    } else {
      return Promise.reject(new Error(`${response.status} error creating project ${project.title}`));
    }
  }
}
