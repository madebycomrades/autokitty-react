import db from '../../../db/db'
import route from 'koa-route'

export default route.get('/api/project', function * () {
  const projects = (yield db.query('projects/by_id', {include_docs: true}))
    .rows.map(row => row.doc)
  this.response.type = 'json'
  this.body = JSON.stringify(projects)
})
