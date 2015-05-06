import db from '../../../db/db';
import route from 'koa-route';
import {json} from 'co-body';

export default route.post('/api/project',function * () {
  let body = yield json(this);
  body.type = 'project';
  let response = yield db.post(body);
  this.response.type = 'json';
  this.response.status = 201;
  this.body = JSON.stringify({_id: response.id});
});
