import db from '../../../db/db';
import route from 'koa-route';

export default route.get('/api/project/:projectId',function * (projectId) {
  let project = yield db.get(projectId);
  this.response.type = 'json';
  this.body = JSON.stringify(project);
});
