import db from '../../../../db/db';
import {json} from 'co-body';
import route from 'koa-route';
import shortid from 'shortid';
import slug from 'to-slug-case';

export default route.post('/api/project/:projectId/member', function * (projectId) {
  const member = yield json(this);
  member.slug = `${slug(member.name)}-${shortid.generate()}`;
  member.expenses = [];
  yield db.upsert(projectId, project => {
    project.members.push(member);
    return project;
  });
  this.response.status = 201;
  this.response.type = 'json';
  this.body = JSON.stringify(member);
});
