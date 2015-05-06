import db from '../../../db/db';
import route from 'koa-route';

export default route.get('/api/project',function * () {
  let projects = yield db.query('autokitty/projects');
  projects = projects.rows.map(row => row.value);
  this.response.type = 'json';
  this.body = JSON.stringify(projects);
});
