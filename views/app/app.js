import Handlebars from 'handlebars';
import {readFileSync} from 'fs';

let tpl = Handlebars.compile(readFileSync(`${__dirname}/app.hbs`,{encoding: 'utf8'}));

export default function * () {
  const {url} = this.request;
  if (url === '/' || url.startsWith('/project/')) {
    this.body = tpl();
  } else {
    this.status = 404;
  }
}
