import Handlebars from 'handlebars';
import {readFileSync} from 'fs';

let tpl = Handlebars.compile(readFileSync(`${__dirname}/app.hbs`,{encoding: 'utf8'}));

export default function * () {
  this.body = tpl();
}
