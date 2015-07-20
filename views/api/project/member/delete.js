import db from '../../../../db/db';
import route from 'koa-route';

export default route.delete('/api/project/:id/member/:slug', function * (id, slug) {
  yield db.upsert(id, doc => {
    doc.members = doc.members.filter(member => member.slug !== slug);
    return doc;
  });
  this.response.status = 200;
});
