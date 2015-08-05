import db from '../../../db/db'
import route from 'koa-route'

export default route.delete('/api/project/:projectId/member/:memberSlug', function * (projectId, memberSlug) {
  yield db.upsert(projectId, project => {
    project.members = project.members.filter(member => member.slug !== memberSlug)
    return project
  })
  this.response.status = 200
})
