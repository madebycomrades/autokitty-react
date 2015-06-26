import {Actions} from 'flummox';
import {apiPath} from '../../utils';
import fetch from 'isomorphic-fetch';
import {get as getRouter} from '../../routing/router';

const projectResourceUri = `${apiPath()}/project`;

export default class ProjectActions extends Actions {

  async fetchProject (id) {

    var response = await fetch(`${projectResourceUri}/${id}`);

    if (response.status === 200) {
      return await response.json();
    }

    return Promise.reject(new Error(`${response.status} GET project ${id}`));
  }

  async newProject (project) {

    var response = await fetch(projectResourceUri,{
      method: 'post',
      body: JSON.stringify(project)
    });

    if (response.status !== 201) return Promise.reject(new Error(`${response.status} POST project`));

    return response.json().then(json => {
      let router = getRouter();
      router.transitionTo('project',{projectId: json.id});
    });
  }

  async deleteMember (projectId,memberSlug) {

    const uri = `${projectResourceUri}/${projectId}/member/${memberSlug}`;

    var response = await fetch(uri,{
      method: 'delete'
    });

    if (response.status !== 200) return Promise.reject(new Error(`${response.status} DELETE member`));

    return await Promise.resolve(memberSlug);
  }
}
