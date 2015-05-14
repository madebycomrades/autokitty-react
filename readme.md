# AutoKitty

## Tech

- ES6
- Koa server
- PouchDB
- Isomorphic React
- Flux architecture
- jspm

## System requirements

- iojs 2.0.0 npm 2.9.0 (manage Node/iojs/npm versions with [nvm](https://github.com/creationix/nvm))

## Server

### Development

Ensure that the development database has been initialised and then,

```sh
$ npm run watch
```

> The server will start in development mode, watch local files for changes and restart when necessary.

### Production

Starting the server in production mode will first bundle the client into a single self executing file using jspm. The server will expect a number of env vars to be present, and you can supply these manually to simulate running the app in production mode locally,

```sh
$ NODE_ENV=production PORT=3000 DB=./db/local/ak npm start
```

> TODO: Where will we deploy the live app to? Dokku? Heroku?

## Tests

The unit tests run with Jasmine. Where needed they provide a DOM implementation using jsdom, therefore no browser headless or otherwise is required. Modules are mocked using proxyquire.

Run the unit tests with,

```sh
$ npm test
```

## Database

The database is based on [PouchDB](http://pouchdb.com). A flexible interface to local and remote data sources that implements the CouchDB API.

### Development

The development database is created locally at `./db/local/ak`.

To freshly create (or recreate) the development database, insert its design document and populate it with fixture data run,

```sh
$ npm run dev:db:init
```

### Production

> TODO: How will the production database work? Cloudant?

## Annoyances

- Afaiu for 3rd party modules to be used across both client and server they need to be installed separately in both node_modules and jspm_packages ... maybe Browserify with ES6 transform better at the mo?
- jspm CSS handling seems quite immature. There is no way to ensure load order of CSS imports, and currently no way to introduce a PostCSS pipeline - so no autoprefixer etc.
- Otherwise jspm is a great workflow (transparent ES6 usage, no need to build on dev) but it also seems quite ... "elaborate". Its a complex layer that sits on top of npm and seems to be doing a lot, even implementing its own registry of sorts. That said, its very actively maintained.
- React inline CSS seems quite immature. A fair few libraries to try out, but no library that supports both pseudo selectors (:hover etc) and media queries at the mo.
- Facebook Jest, the recommended testing lib for React stuff (auto mocking required modules, jsdom etc.) is broken when used with ES6/iojs
