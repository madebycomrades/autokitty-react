import {Actions} from 'flummox';
import {apiPath} from '../../utils';
import fetch from 'isomorphic-fetch';
import {get as getRouter} from '../../routing/router';

let projectResourceUri = `${apiPath()}/project`;

export default class ProjectActions extends Actions {

  async fetchProject (id) {

    var response = await fetch(`${projectResourceUri}/${id}`);

    if (response.status === 200) {
      return await response.json();
    } else {
      return Promise.reject(new Error(`${response.status} GET project ${id}`));
    }
  }

  async newProject (project) {

    var response = await fetch(projectResourceUri,{
      method: 'post',
      body: JSON.stringify(project)
    });

    if (response.status !== 201)
      return Promise.reject(new Error(`${response.status} POST project`));

    response.json().then(json => {
      console.log(json);
      let router = getRouter();
      router.transitionTo('project',{projectId: json.id});
    });
  }
}
