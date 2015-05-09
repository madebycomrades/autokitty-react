import db from '../../../db/db';
import route from 'koa-route';
import {json} from 'co-body';
import ProjectRecord from '../../../public/records/ProjectRecord';

export default route.post('/api/project',function * () {
  let reqBody = yield json(this);
  let result = yield db.put(reqBody);
  let project = new ProjectRecord(yield db.get(result.id)).toJS();
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(project);
});
