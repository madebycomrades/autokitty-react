import appView from './views/app/app';
import createProject from './views/api/project/create';
import deleteMember from './views/api/project/member/delete';
import getProject from './views/api/project/get';
import koa from 'koa';
import projectCollection from './views/api/project/collection';
import statics from 'koa-static';

const {NODE_ENV, PORT} = process.env;

let app = koa();

app.use(statics('./static'));
app.use(getProject);
app.use(projectCollection);
app.use(createProject);
app.use(deleteMember);
app.use(appView);
app.listen(PORT);

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`);
