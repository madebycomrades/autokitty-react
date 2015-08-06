import db from '../../../db/db'
import route from 'koa-route'

export default route.get('/api/project', function * () {
  const projects = (yield db.query('autokitty/projects'))
    .rows.map(row => row.value)
  this.response.type = 'json'
  this.body = JSON.stringify(projects)
})
