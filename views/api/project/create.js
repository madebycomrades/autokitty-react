import db from '../../../db/db';
import {json} from 'co-body';
import route from 'koa-route';
import shortid from 'shortid';
import slug from 'to-slug-case';

export default route.post('/api/project', function * () {
  const project = yield json(this);
  project.type = 'project';
  project._id = project._id || `${slug(project.title)}-${shortid.generate()}`;
  project.createdAt = project.createdAt || Date.now();
  project.members = project.members || [];
  yield db.put(project);
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(project);
});
