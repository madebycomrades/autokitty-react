import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';

const {WATCHIFY} = process.env;

var b = browserify({
  cache: {},
  packageCache: {},
  entries: ['./public/main.js']
});

function bundle () {
  b.bundle().pipe(fs.createWriteStream('./public/main.bundle.js'));
}

if (WATCHIFY) b = watchify(b);

b.transform(babelify.configure({
  stage: 0,
  optional: ['runtime']
}));

b.on('update',() => bundle());
b.on('log',msg => console.log(msg));

bundle();
