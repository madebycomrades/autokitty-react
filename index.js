import appView from './views/app/app';
import koa from 'koa';
import koaStatic from 'koa-static';

const {NODE_ENV,PORT,DB} = process.env;

let app = koa();

app.use(koaStatic('./public'));
app.use(appView);
app.listen(PORT);

console.log(`Autokitty started on ${PORT} in ${NODE_ENV}`);
console.log(`Using CouchDB at ${DB}`);
