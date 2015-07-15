import db from '../../../db/db';
import {json} from 'co-body';
import route from 'koa-route';
import shortid from 'shortid';
import slug from 'to-slug-case';

export default route.post('/api/project',function * () {
  const doc = yield json(this);
  doc._id = `${slug(doc.title)}-${shortid.generate()}`;
  doc.type= 'project';
  doc.createdAt = Date.now();
  doc.members = doc.members ? doc.members : [];
  yield db.put(doc);
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(doc);
});
