import db from '../../../../db/db';
import route from 'koa-route';

export default route.delete('/api/project/:projectId/member/:memberSlug',function * (projectId,memberSlug) {
  yield db.upsert(projectId,doc => {
    doc.members = doc.members.filter(member => member.slug !== memberSlug);
    return doc;
  });
  this.response.status = 200;
});
