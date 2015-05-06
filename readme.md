# AutoKitty

## Tech

- ES6
- Koa server
- CouchDB
- Isomorphic React
- Flux architecture
- jspm

## System requirements

- iojs 2.0.0 npm 2.9.0 (manage Node/iojs/npm versions with [nvm](https://github.com/creationix/nvm))
- Docker 1.6.0

## Server

### Development

Ensure that the development database is running and then,

```sh
$ npm run watch
```

> The server will start in development mode, watch local files for changes and restart when necessary.

### Production

Starting the server in production mode will first bundle the client into a single self executing file using jspm. The server will expect a number of env vars to be present, and you can supply these manually to simulate running the app in production mode locally,

```sh
$ NODE_ENV=production PORT=3000 DB=$(./scripts/db-uri)/autokitty npm start
```

> This example uses a script to populate the `DB` env var with the URI of the development database.

> TODO: Where will we deploy the live app to? Dokku? Heroku?

## Database

### Development

The development database is based on the [klaemo/couchdb](https://registry.hub.docker.com/u/klaemo/couchdb) image and needs a working Docker installation. On OSX this means installing both the Docker client and boot2docker using the instructions [here](https://docs.docker.com/installation/mac).

First, ensure that your boot2docker and Docker installs are working correctly and ready,

```sh
$ boot2docker status # Should output "running"
$ docker version # Should output Docker client and daemon info
```

> If boot2docker is running, but you can't talk to the Docker daemon in the VM you may need to export boot2docker's env vars to your shell with `eval "$(boot2docker shellinit)"`.

Pull the image from the Docker registry (you only need to do this once),

```sh
$ npm run db:pull
```

Run the container (this will create a fresh autokitty database and populate it with some initial documents - a design document and some fixtures),

```sh
$ npm run db:up
```

Stop and delete the running container instance,

```sh
$ npm run db:down
```

Attach your shell to the stdout coming from the CouchDB process inside the container,

```sh
$ npm run db:attach
```

Open the CouchDB server's web management user interface in a browser,

```sh
$ npm run db:browse
```

### Production

> TODO: How will the production database work? Cloudant?

## Annoyances

- Afaiu for 3rd party modules to be used across both client and server they need to be installed separately in both node_modules and jspm_packages
- jspm CSS handling seems quite immature. There is no way to ensure load order of CSS imports, and currently no way to introduce a PostCSS pipeline - so no autoprefixer etc.
- jspm is a great workflow (transparent ES6 usage, no need to build on dev) but it also seems quite ... "elaborate" and "breaky". Its a complex layer that sits on top of npm and seems to be trying to do a lot, even implementing its own registry of sorts. That said, its very actively maintained.
- React inline CSS seems quite immature. A fair few libraries to try out, but no library that supports both pseudo selectors (:hover etc) and media queries at the mo.
