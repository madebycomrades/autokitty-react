import appView from './server/app/app'
import expenseViews from './server/api/expense'
import koa from 'koa'
import memberViews from './server/api/member'
import projectViews from './server/api/project'
import statics from 'koa-static'

const {NODE_ENV, PORT} = process.env
const routes = [...projectViews, ...memberViews, ...expenseViews, appView]
const app = koa()

app.use(statics('./static'))
routes.forEach(view => app.use(view))
app.listen(PORT)

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`)
