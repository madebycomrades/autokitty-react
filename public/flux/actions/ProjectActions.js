import {Actions} from 'flummox';

export default class ProjectActions extends Actions {

  async get (id) {
    // TODO Implement fetch() here to get server data
    return await Promise.resolve({
      id,
      title: 'Jolly trip'
    });
  }
}
