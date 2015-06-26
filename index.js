import koa from 'koa';
import statics from 'koa-static';
import appView from './views/app/app';
import getProject from './views/api/project/get';
import projectCollection from './views/api/project/collection';
import createProject from './views/api/project/create';
import deleteMember from './views/api/project/member/delete';

const {NODE_ENV,PORT} = process.env;

let app = koa();

app.use(statics('./public'));
app.use(getProject);
app.use(projectCollection);
app.use(createProject);
app.use(deleteMember);
app.use(appView);
app.listen(PORT);

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`);
