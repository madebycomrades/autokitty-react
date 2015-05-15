# AutoKitty

## Tech

- ES6 (via Babel)
- Koa server
- PouchDB
- Isomorphic React + Flux
- npm/jspm

## System requirements

- iojs `^2.0.0` (manage versions with [nvm](https://github.com/creationix/nvm))

## Quick start

```sh
npm i
npm run dev:db:init
npm run watch
```

## Package managers

This project uses jspm for client packages, and npm for server packages. For packages intended to be used in files executed across both client and server ensure that the packages are installed using both managers and their versions are in sync.

In development mode jspm handles module loading and ES6 transpiling in real time in the browser, therefore no compilation step is required. When running in production mode the app is bundled into a single pre-compiled self executing file.

To install a frontend package use the local jspm,

```sh
$ node_modules/.bin/jspm install npm:react
```

## Server

### Development

Ensure that the development database has been initialised and then,

```sh
$ npm run watch
```

To run the development server without file watching and restarting,

```sh
$ npm run dev:start
```

### Production

Starting the server in production mode will first bundle the client into a single self executing file using jspm. The server will expect a number of env vars to be present, and you can supply these manually to simulate locally running the app in production mode,

```sh
$ NODE_ENV=production PORT=3000 DB=.db/autokitty npm start
```

> TODO: Where will we deploy the live app to? Dokku? Heroku?

## Tests

Lint with,

```sh
$ npm run -s lint
```

Run the unit tests with,

```sh
$ npm t
```

> The unit tests use Jasmine. For tests that interact with the DOM `window` and `document` globals are provided by jsdom without the need for a browser, headless or otherwise. Module imports can be mocked in test subjects using proxyquire.

## Database

[PouchDB](http://pouchdb.com) provides a unified CouchDB-based interface to local or remote data stores.

### Development

The development database is created locally in the `.db/` folder.

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
