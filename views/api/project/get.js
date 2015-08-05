import db from '../../../db/db'
import route from 'koa-route'

export default route.get('/api/project/:projectId', function * (projectId) {
  const project = yield db.get(projectId)
  this.response.type = 'json'
  this.body = JSON.stringify(project)
})
