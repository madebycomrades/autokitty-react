# AutoKitty

> This kitty sorts out your complicated group expenses.

## Overview

The plan is for AutoKitty to be an app that lets users create collaborative projects to manage complicated group expenses. Imagine you've gone on holiday with friends and you've all spent a lot of money on group expenses. Some people are involved in some expenses, while others are exempt (perhaps they don't drink alchohol for example, or they shouldn't contribute to petrol because they travelled by train).

Resolving this efficiently is tricky to do by hand, and impossible for large groups. AutoKitty will help by computing the smallest number of payments between members in order to settle all debts.

:information_source: There are many other apps that do similar things. This project is mainly a learning exercise in new tech, but hopefully we can differentiate on simplicity and UX.

### Resources

- Mock ups https://moqups.com/jedrichards@gmail.com/hHRoxPtf
- A naive implementation of the settling up algorithm https://gist.github.com/jedrichards/22fa15dd89fe34c3eec1

## Tech

- ES6 (Babel)
- Koa server
- PouchDB
- Isomorphic React + Flux
- npm/jspm

## System requirements

- iojs `^2.0.0` (manage versions with [nvm](https://github.com/creationix/nvm))

## Quick start

```sh
npm i
npm run local:db:init
npm run watch
```

## Package managers

This project uses jspm for client packages, and npm for server packages. For packages intended to be used in files executed across both client and server ensure that the packages are installed using both managers and their versions are in sync.

In development mode jspm handles module loading and ES6 transpiling in real time in the browser, therefore no compilation step is required. When running in production mode the app is bundled into a single pre-compiled self executing file.

To install a new frontend package use the local jspm,

```sh
$ node_modules/.bin/jspm install npm:react
```

## CI/Deployment

Raising a PR on GitHub will trigger an automatic deploy of the latest commit in that PR to a temporary Heroku app for QA/review purposes.

Any commit that passes CI on the master branch will trigger an automatic deploy to the permanent Heroku app at http://autokitty.herokuapp.com.

CI is handled by Codeship here https://codeship.com/projects/80431.

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

When running in production mode the app will first be bundled into a single pre-compiled self-executing file using jspm. You can simulate running the production app locally with,

```sh
$ npm run localprod:start
```

> TODO: Where will we deploy the live app to? Dokku? Heroku?

## Tests

Lint with,

```sh
$ npm run -s lint
```

Run the unit tests with,

```sh
$ npm -s t
```

> The unit tests use Jasmine. For tests that interact with the DOM `window` and `document` globals are provided by jsdom without the need for a browser, headless or otherwise. Module imports can be mocked in test subjects using proxyquire.

## Database

[PouchDB](http://pouchdb.com) provides a unified CouchDB-based interface to local or remote data stores.

### Development

The development database is created locally in the `.db/` folder.

To freshly create (or recreate) the development database, insert its design document and populate it with fixture data run,

```sh
$ npm run local:db:init
```

### Production

> TODO: How will the production database work? Cloudant?

## Annoyances

- Afaiu for 3rd party modules to be used across both client and server they need to be installed separately in both node_modules and jspm_packages ... maybe Browserify with ES6 transform better at the mo?
- jspm CSS handling seems quite immature. There is no way to ensure load order of CSS imports, and currently no way to introduce a PostCSS pipeline - so no autoprefixer etc.
- Otherwise jspm is a great workflow (transparent ES6 usage, no need to build on dev) but it also seems quite ... "elaborate". Its a complex layer that sits on top of npm and seems to be doing a lot, even implementing its own registry of sorts. That said, its very actively maintained.
- React inline CSS seems quite immature. A fair few libraries to try out, but no library that supports both pseudo selectors (:hover etc) and media queries at the mo.
- Facebook Jest, the recommended testing lib for React stuff (auto mocking required modules, jsdom etc.) is broken when used with ES6/iojs
