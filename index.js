import appView from './views/app/app';
import projectViews from './views/api/project';
import memberViews from './views/api/project/member';
import koa from 'koa';
import projectCollection from './views/api/project/collection';
import statics from 'koa-static';

const {NODE_ENV, PORT} = process.env;
const app = koa();

app.use(statics('./static'));
[...projectViews, ...memberViews, appView].forEach(view => app.use(view));
app.listen(PORT);

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`);
