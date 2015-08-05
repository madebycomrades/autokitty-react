import appView from './views/app/app'
import expenseViews from './views/api/expense'
import koa from 'koa'
import memberViews from './views/api/member'
import projectViews from './views/api/project'
import statics from 'koa-static'

const {NODE_ENV, PORT} = process.env
const serverRoutes = [...projectViews, ...memberViews, ...expenseViews, appView]
const app = koa()

app.use(statics('./static'))
serverRoutes.forEach(view => app.use(view))
app.listen(PORT)

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`)
