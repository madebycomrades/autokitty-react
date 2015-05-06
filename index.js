import appView from './views/app/app';
import koa from 'koa';
import projectGetView from './views/api/project/get';
import projectCollectionView from './views/api/project/collection';
import statics from 'koa-static';
import 'isomorphic-fetch';

const {NODE_ENV,PORT,DB} = process.env;

let app = koa();

app.use(statics('./public'));
app.use(projectGetView);
app.use(projectCollectionView);
app.use(appView);
app.listen(PORT);

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`);
