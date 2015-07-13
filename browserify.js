import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import envify from 'envify/custom';
import watchify from 'watchify';

const {WATCHIFY,NODE_ENV} = process.env;

var b = browserify({
  cache: {},
  packageCache: {},
  entries: ['./src/main.js']
});

function bundle () {
  b.bundle().pipe(fs.createWriteStream('./public/main.bundle.js'));
}

if (WATCHIFY) b = watchify(b);

b.transform(babelify.configure({
  stage: 0,
  optional: ['runtime']
}));

b.transform(envify({
  NODE_ENV: NODE_ENV
}));

b.on('update',() => bundle());
b.on('log',msg => console.log(msg));

bundle();
