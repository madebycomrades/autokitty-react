import db from '../../../db/db';
import route from 'koa-route';

export default route.get('/api/project/:projectId',function * (projectId) {
  const doc = yield db.get(projectId);
  this.response.type = 'json';
  this.body = JSON.stringify(doc);
});
