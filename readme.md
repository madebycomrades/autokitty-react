# AutoKitty

[![Codeship](https://img.shields.io/codeship/abe27f10-debd-0132-a627-465ff4e7e511/master.svg?label=master&style=flat-square)](https://codeship.com/projects/80431)
[![Codeship](https://img.shields.io/codeship/abe27f10-debd-0132-a627-465ff4e7e511/develop.svg?label=develop&style=flat-square)](https://codeship.com/projects/80431)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Overview

> This kitty sorts out your complicated group expenses.

The plan is for AutoKitty to be an app that lets users create collaborative projects to manage complicated group expenses. Imagine you've gone on holiday with friends and you've all spent a lot of money on group expenses. Some people are involved in some expenses, while others are exempt (perhaps they don't drink alchohol for example, or they shouldn't contribute to petrol because they travelled by train).

Resolving this efficiently is tricky to do by hand, and impossible for large groups. AutoKitty will help by computing the smallest number of payments between members in order to settle all debts.

There are many other apps that do similar things. This project is mainly a learning exercise in new tech, but hopefully we can differentiate on simplicity and UX.

### Resources

- Mock ups https://moqups.com/jedrichards@gmail.com/hHRoxPtf
- A naive implementation of the settling up algorithm https://gist.github.com/jedrichards/22fa15dd89fe34c3eec1

## Tech

- ~~Isomorphic~~ Universal app
- React+Redux (atomic flux with reducers)
- RxJS (reactive state streams)
- Babel (ES6)
- Browserify (client bundling)
- Koa (static file server and REST API)
- PouchDB (CouchDB adapter)
- Standard (code style)

## System requirements

- iojs `3.1.0`, npm `2.13.3`

> Manage Node versions with [nvm](https://github.com/creationix/nvm))

## Quick start

```sh
$ npm install
$ npm run start:dev
```

> `npm install` will install the dependencies and then automatically build the client code in a postinstall step.<br/>`npm run start:dev` will spin up the server on localhost:3000.

## Npm commands

### Server

Run the server in development mode while watching and restarting,

```sh
$ npm run watch:server
```

### Client

Bundle the client files while watching and re-bundling,

```sh
$ npm run watch:client
```

> You'll need two terminal windows going during development, one for watching the server and one for watching the client.

### Linting and testing

Lint with,

```sh
$ npm run -s lint
```

Run the unit tests with,

```sh
$ npm run -s test
```

> The `-s` flag stops npm from filling up your console with its overly chatty output, with `-s` you'll just get the linting and testing tool's stderr or stdout.

## Src folders

- `actions` Redux action creators [docs](http://gaearon.github.io/redux/docs/basics/Actions.html)
- `components` "Dumb" components [docs](http://gaearon.github.io/redux/docs/basics/UsageWithReact.html)
- `constants` Generic constants and action type strings [docs](http://gaearon.github.io/redux/docs/basics/Actions.html)
- `containers` "Smart" components [docs](http://gaearon.github.io/redux/docs/basics/UsageWithReact.html)
- `middleware` Redux middleware [docs](http://gaearon.github.io/redux/docs/api/applyMiddleware.html)
- `observables` RxJs streams [docs](http://xgrommx.github.io/rx-book/)
- `reducers` Redux reducers [docs](http://gaearon.github.io/redux/docs/basics/Reducers.html)
- `selectors` Redux selectors [docs](https://github.com/faassen/reselect)
- `utils` Utility functions

## CI and deployment

CI is handled by Codeship here https://codeship.com/projects/80431.

Any commit that passes CI on the master branch will trigger an automatic deployment to the Heroku app at http://autokitty.herokuapp.com.

Additionally, raising a PR on GitHub will trigger an automatic deployment of the latest commit in that PR to a temporary Heroku app for QA/review purposes. PR apps are only deployed once their commit passes CI.

## Database

[PouchDB](http://pouchdb.com) provides a unified CouchDB-based interface to local or remote data stores.

The development database is local and in-memory, and is recreated each time the app starts.

> TODO: How will the production database work? Cloudant?
