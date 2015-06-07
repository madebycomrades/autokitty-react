import koa from 'koa';
import statics from 'koa-static';
import appView from './views/app/app';
import projectGetView from './views/api/project/get';
import projectCollectionView from './views/api/project/collection';
import projectCreateView from './views/api/project/create';

const {NODE_ENV,PORT} = process.env;

let app = koa();

app.use(statics('./public'));
app.use(projectGetView);
app.use(projectCollectionView);
app.use(projectCreateView);
app.use(appView);
app.listen(PORT);

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`);
