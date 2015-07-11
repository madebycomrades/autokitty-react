import db from '../../../db/db';
import route from 'koa-route';

export default route.get('/api/project/:id',function * (id) {
  let project = yield db.get(id);
  this.response.type = 'json';
  this.body = JSON.stringify(project);
});
