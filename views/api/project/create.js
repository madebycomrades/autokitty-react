import db from '../../../db/db';
import route from 'koa-route';
import {json} from 'co-body';
import ProjectRecord from '../../../public/records/ProjectRecord';

export default route.post('/api/project',function * () {
  let body = yield json(this);
  let {id} = yield db.put(new ProjectRecord(body).toJS());
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify({id});
});
