import db from '../../../db/db';
import {json} from 'co-body';
import route from 'koa-route';
import shortid from 'shortid';
import slug from 'to-slug-case';

export default route.post('/api/project',function * () {
  let project = yield json(this);
  project._id = `${slug(project.title)}-${shortid.generate()}`;
  project.type= 'project';
  project.createdAt = Date.now();
  yield db.put(project);
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(project);
});
