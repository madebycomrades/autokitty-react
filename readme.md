# AutoKitty

> This kitty sorts out your complicated group expenses.

## Overview

The plan is for AutoKitty to be an app that lets users create collaborative projects to manage complicated group expenses. Imagine you've gone on holiday with friends and you've all spent a lot of money on group expenses. Some people are involved in some expenses, while others are exempt (perhaps they don't drink alchohol for example, or they shouldn't contribute to petrol because they travelled by train).

Resolving this efficiently is tricky to do by hand, and impossible for large groups. AutoKitty will help by computing the smallest number of payments between members in order to settle all debts.

There are many other apps that do similar things. This project is mainly a learning exercise in new tech, but hopefully we can differentiate on simplicity and UX.

### Resources

- Mock ups https://moqups.com/jedrichards@gmail.com/hHRoxPtf
- A naive implementation of the settling up algorithm https://gist.github.com/jedrichards/22fa15dd89fe34c3eec1

## Tech

- ES6 (Babel)
- Koa server
- PouchDB
- Isomorphic React + Flux
- Browserify

## System requirements

- iojs `^2.0.0` (manage versions with [nvm](https://github.com/creationix/nvm))

## Quick start

```sh
$ npm i
$ npm run start:dev
```

## CI/Deployment

CI is handled by Codeship here https://codeship.com/projects/80431.

Any commit that passes CI on the master branch will trigger an automatic deployment to the Heroku app at http://autokitty.herokuapp.com.

Additionally, raising a PR on GitHub will trigger an automatic deployment of the latest commit in that PR to a temporary Heroku app for QA/review purposes. PR apps are only deployed once their commit passes CI.

## Server

Run the server in development mode while watching and restarting,

```sh
$ npm run watch:server
```

## Client

Bundle the client files while watching and re-bundling,

```sh
$ npm run watch:client
```

## Linting and testing

Lint with,

```sh
$ npm run -s lint
```

Run the unit tests with,

```sh
$ npm -s t
```

## Database

[PouchDB](http://pouchdb.com) provides a unified CouchDB-based interface to local or remote data stores.

The development database is local and in-memory, and is recreated each time the app starts.

> TODO: How will the production database work? Cloudant?
