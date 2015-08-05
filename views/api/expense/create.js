import db from '../../../db/db'
import {json} from 'co-body'
import route from 'koa-route'
import shortid from 'shortid'
import slug from 'to-slug-case'

export default route.post('/api/project/:projectId/member/:memberSlug/expense', function * (projectId, memberSlug) {
  const expense = yield json(this)
  expense.slug = `${slug(expense.name)}-${shortid.generate()}`
  expense.owner = memberSlug
  expense.excluded = []
  yield db.upsert(projectId, project => {
    const member = project.members.find(member => member.slug === memberSlug)
    member.expenses.push(expense)
    return project
  })
  this.response.status = 201
  this.response.type = 'json'
  this.body = JSON.stringify(expense)
})
