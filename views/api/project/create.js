import db from '../../../db/db';
import route from 'koa-route';
import {json} from 'co-body';
import ProjectRecord from '../../../public/records/ProjectRecord';

export default route.post('/api/project',function * () {
  let reqBody = yield json(this);
  let result = yield db.put(new ProjectRecord(reqBody).toJS());
  let project = yield db.get(result.id);
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(project);
});
